import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import re
import os
from io import BytesIO
from PIL import Image
from bson.binary import Binary
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from pymongo import MongoClient
from datetime import datetime
from selenium.common.exceptions import TimeoutException, WebDriverException

class AIToolsScraper:
    def __init__(self, mongodb_uri="mongodb://localhost:27017/"):
        self.client = MongoClient(mongodb_uri)
        self.db = self.client['toolify_db']
        self.collection = self.db['tools']
        self.screenshots_dir = 'screenshots'
        os.makedirs(self.screenshots_dir, exist_ok=True)
        
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_argument('--disable-notifications')
        chrome_options.add_argument("--window-size=1920,1080")
        chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        
        self.driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()),
            options=chrome_options
        )
        
        # Define technology keywords
        self.tech_keywords = {
            'LLM': ['llm', 'large language model', 'gpt', 'transformer'],
            'Computer Vision': ['computer vision', 'image recognition', 'object detection', 'cv'],
            'NLP': ['natural language processing', 'nlp', 'text analysis', 'language understanding'],
            'Machine Learning': ['machine learning', 'ml', 'deep learning', 'neural network'],
            'Speech AI': ['speech recognition', 'text to speech', 'voice ai', 'speech-to-text'],
            'Generative AI': ['generative ai', 'text-to-image', 'gan', 'diffusion model']
        }
        
        # Define tool categories
        self.tool_categories = {
            'content_generation': ['writer', 'content creator', 'generate content', 'writing assistant'],
            'image_generation': ['image generator', 'create images', 'art generator', 'designer'],
            'analysis': ['analyzer', 'analysis tool', 'insights', 'data analysis'],
            'conversion': ['converter', 'transformer', 'translate', 'transcribe'],
            'automation': ['automation', 'automate', 'workflow', 'bot'],
            'assistant': ['assistant', 'helper', 'chat', 'companion'],
            'developer_tool': ['developer', 'coding', 'programming', 'code generator']
        }

    def is_valid_content(self, text):
        """Check if the content is valid and not a bot check page"""
        if not text:
            return False
            
        invalid_patterns = [
            r'verify you are human',
            r'enable javascript',
            r'complete the security check',
            r'waiting.*respond',
            r'cloudflare',
            r'just moment',
            r'please wait',
            r'security check'
        ]
        
        return not any(re.search(pattern, text.lower()) for pattern in invalid_patterns)

    def identify_tool_category(self, text):
        """Identify the main category of the AI tool"""
        text = text.lower()
        max_matches = 0
        best_category = None
        
        for category, keywords in self.tool_categories.items():
            matches = sum(1 for keyword in keywords if keyword in text)
            if matches > max_matches:
                max_matches = matches
                best_category = category
        
        return best_category

    def create_structured_description(self, text, category, tool_name):
        """Create a structured description based on the tool category"""
        category_templates = {
            'content_generation': "AI-powered content generation tool for",
            'image_generation': "AI image generation tool that",
            'analysis': "AI analysis tool that",
            'conversion': "AI conversion tool that",
            'automation': "AI automation tool for",
            'assistant': "AI assistant that",
            'developer_tool': "AI development tool for"
        }
        
        purpose_patterns = [
            r"(?:helps|allows|enables)(?:\syou)?\sto\s([\w\s\-]+?)(?:\.|,|\s(?:and|with|using))",
            r"(?:for|specialized\sin)\s([\w\s\-]+?)(?:\.|,|\s(?:and|with|using))",
            r"(?:creates|generates|produces)\s([\w\s\-]+?)(?:\.|,|\s(?:and|with|using))"
        ]
        
        purpose = None
        for pattern in purpose_patterns:
            if match := re.search(pattern, text.lower()):
                purpose = match.group(1).strip()
                if 5 <= len(purpose.split()) <= 10:
                    break
        
        if purpose:
            template = category_templates.get(category, "AI tool that")
            return f"{template} {purpose}"
        
        return None

    def format_description(self, description):
        """Format and clean the description"""
        if not description:
            return None
            
        # Remove marketing fluff
        marketing_words = r'\b(simply|easily|quickly|efficiently|seamlessly|revolutionary|cutting-edge|innovative)\b'
        description = re.sub(marketing_words, '', description)
        
        # Clean up whitespace
        description = ' '.join(description.split())
        
        # Capitalize first letter
        description = description[0].upper() + description[1:] if description else ''
        
        # Ensure it ends with a period
        if description and not description.endswith('.'):
            description += '.'
        
        # Limit length
        words = description.split()
        if len(words) > 15:
            description = ' '.join(words[:15]) + '...'
        
        return description

    def extract_main_use_case(self, text, tool_name):
        """Extract precise and appropriate introduction for the AI tool"""
        if not self.is_valid_content(text):
            return None
            
        # Clean the text
        text = re.sub(r'\s+', ' ', text.lower())
        
        # Try to find the most relevant description
        description = None
        
        # 1. Look for specific tool type patterns
        tool_patterns = [
            rf"{tool_name.lower()} is (?:an? )?(?:ai )?(?:tool |platform |solution )?(?:that |which |to )([\w\s\-,\.]+?)[\.\n]",
            rf"{tool_name.lower()} ((?:helps|allows|enables) (?:you |users )?to )([\w\s\-,\.]+?)[\.\n]",
            r"(?:ai tool|platform|solution) (?:for|that) ([\w\s\-,\.]+?)[\.\n]"
        ]
        
        for pattern in tool_patterns:
            match = re.search(pattern, text)
            if match:
                description = match.group(1)
                break
        
        if not description:
            # 2. Try category-based description
            category = self.identify_tool_category(text)
            if category:
                description = self.create_structured_description(text, category, tool_name)
        
        if not description:
            sentences = re.split(r'[.!?]', text)
            for sentence in sentences:
                if len(sentence.split()) >= 5 and len(sentence.split()) <= 15:
                    if any(tech in sentence.lower() for tech in ['ai', 'machine learning', 'generator', 'analyzer', 'assistant']):
                        description = sentence.strip()
                        break
        
        return self.format_description(description) if description else None

    def wait_for_content(self, timeout=20):
        """Wait for real content to load with multiple checks"""
        try:
            # Wait for body
            WebDriverWait(self.driver, timeout).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )
            
            # Check for content indicators
            for selector in ['h1', 'main', 'article', '.content', '#main-content']:
                try:
                    WebDriverWait(self.driver, 5).until(
                        EC.presence_of_element_located((By.CSS_SELECTOR, selector))
                    )
                    break
                except TimeoutException:
                    continue
                    
            time.sleep(3)
            return True
        except TimeoutException:
            return False

    def take_screenshot(self, url, tool_name):
        """Take a screenshot of the website and convert to PNG binary data for MongoDB storage"""
        try:
            # Create a safe filename
            safe_name = re.sub(r'[^\w\-.]', '', tool_name.lower())
            file_path = os.path.join(self.screenshots_dir, f"{safe_name}.png")
            
            # Take screenshot
            self.driver.save_screenshot(file_path)
            
            # Optimize and convert to JPG (smaller size)
            with Image.open(file_path) as img:
                # Create output path for JPG
                jpg_path = os.path.join(self.screenshots_dir, f"{safe_name}.jpg")
                
                # Convert to RGB (in case it's PNG with alpha channel)
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Save as JPG with quality=85
                img.save(jpg_path, 'JPEG', quality=85, optimize=True)
                
                # Read the JPG file as binary data
                with open(jpg_path, "rb") as image_file:
                    binary_data = Binary(image_file.read())
                
                return {
                    'data': binary_data,
                    'content_type': 'image/jpeg',
                    'filename': f"{safe_name}.jpg"
                }
                
        except Exception as e:
            print(f"Error taking screenshot for {url}: {str(e)}")
            return None

    def detect_technologies(self, text):
        """Detect AI technologies with improved detection"""
        if not text or not self.is_valid_content(text):
            return []
            
        text = text.lower()
        detected_tech = set()
        
        for tech, keywords in self.tech_keywords.items():
            if any(keyword in text for keyword in keywords):
                detected_tech.add(tech)
        
        return list(detected_tech) if detected_tech else ['Unknown']

    def _safe_extract(self, soup, selector):
        """Safely extract text with improved cleaning"""
        try:
            element = soup.select_one(selector)
            if element:
                # Remove script and style content
                for script in element.find_all(['script', 'style']):
                    script.decompose()
                text = element.get_text(strip=True)
                # Clean up the text
                text = re.sub(r'\s+', ' ', text)
                return text.strip()
        except Exception:
            pass
        return ''

    def scrape_ai_tools(self, urls):
        """Scrape information about AI tools with improved error handling"""
        for url in urls:
            retry_count = 0
            max_retries = 3
            
            while retry_count < max_retries:
                try:
                    self.driver.get(url)
                    
                    if not self.wait_for_content():
                        print(f"Timeout waiting for content on {url}")
                        retry_count += 1
                        continue
                    
                    soup = BeautifulSoup(self.driver.page_source, 'html.parser')
                    
                    # Extract content with multiple selectors
                    content_text = ""
                    for selector in ['main', 'article', '.content', '#main-content', '.description', '.about']:
                        if content := soup.select_one(selector):
                            content_text = content.get_text(separator=' ', strip=True)
                            if len(content_text) > 100 and self.is_valid_content(content_text):
                                break
                    
                    if not content_text:
                        content_text = soup.find('body').get_text(separator=' ', strip=True)
                    
                    if not self.is_valid_content(content_text):
                        print(f"Invalid content detected on {url}, retrying...")
                        retry_count += 1
                        continue
                    
                    # Extract name
                    name = (self._safe_extract(soup, 'h1') or 
                           self._safe_extract(soup, '.tool-name') or 
                           self._safe_extract(soup, '.brand') or
                           self._safe_extract(soup, 'title'))
                    
                    if not name:
                        print(f"Could not extract name from {url}, retrying...")
                        retry_count += 1
                        continue
                    
                    main_use_case = self.extract_main_use_case(content_text, name)
                    technologies = self.detect_technologies(content_text)
                    
                    if not main_use_case or not technologies:
                        print(f"Missing critical information from {url}, retrying...")
                        retry_count += 1
                        continue
                    
                    # Take screenshot
                    screenshot_data = self.take_screenshot(url, name)
                    
                    tool_document = {
                        'name': name,
                        'main_use_case': main_use_case,
                        'technologies': technologies,
                        'url': url,
                        'screenshot': screenshot_data,
                        'last_updated': datetime.utcnow()
                    }
                    
                    # Store if data is valid
                    if all(key in tool_document for key in ['name', 'main_use_case', 'technologies', 'url']):
                        self.collection.update_one(
                            {'url': url},
                            {'$set': tool_document},
                            upsert=True
                        )
                        
                        print(f"Successfully scraped and stored: {tool_document['name']}")
                        print(f"Main use case: {tool_document['main_use_case']}")
                        print(f"Technologies: {', '.join(tool_document['technologies'])}")
                        print(f"Screenshot taken: {'Yes' if screenshot_data else 'No'}")
                        print("-" * 50)
                        break
                    
                except Exception as e:
                    print(f"Error scraping {url} (attempt {retry_count + 1}): {str(e)}")
                    retry_count += 1
                    
                time.sleep(5)
            
            if retry_count == max_retries:
                print(f"Failed to scrape {url} after {max_retries} attempts")

    def export_to_csv(self, filename='ai_tools_data.csv'):
        """Export MongoDB data to CSV (excluding screenshot binary data)"""
        cursor = self.collection.find({})
        data = list(cursor)
        
        if data:
            df = pd.DataFrame(data)
            df = df.drop('_id', axis=1)
            
            # Remove screenshot binary data from CSV export
            if 'screenshot' in df.columns:
                df['has_screenshot'] = df['screenshot'].apply(lambda x: True if x else False)
                df = df.drop('screenshot', axis=1)
                
            df.to_csv(filename, index=False)
            print(f"\nData exported to {filename}")
        else:
            print("No data to export")

    def close(self):
        """Close connections"""
        self.driver.quit()
        self.client.close()

def main():
    # Add URLs
    urls = [
        'https://toolify.ai'
    ]
    
    scraper = AIToolsScraper(mongodb_uri="mongodb://localhost:27017/")
    try:
        scraper.scrape_ai_tools(urls)
        scraper.export_to_csv()
    finally:
        scraper.close()

if __name__ == "__main__":
    main()