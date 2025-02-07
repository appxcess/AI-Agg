import React from 'react';
import '../assets/styles/TextWritingSection.css';

function TextWritingSection() {
  return (
    <section className="text-writing-section">
      <div className="tabs">
        <span className="active">Today</span>
        <span>New</span>
        <span>Most Saved</span>
        <span>Most Used</span>
        <span>Browser Extension</span>
        <span>Apps</span>
        <span>Discord of AI</span>
        <span>AI for Jobs</span>
        <span>AI for Capabilities</span>
      </div>
      <div className="categories-grid">
        <div className="category-card">Text & Writing</div>
        <div className="category-card">Image</div>
        <div className="category-card">Video</div>
        <div className="category-card">Code & IT</div>
        <div className="category-card">Voice</div>
        <div className="category-card">Business</div>
        <div className="category-card">Marketing</div>
        <div className="category-card">AI Detector</div>
        <div className="category-card">Chatbot</div>
        <div className="category-card">Design & Art</div>
        <div className="category-card">Life Assistant</div>
        <div className="category-card">3D</div>
        <div className="category-card">Education</div>
        <div className="category-card">Prompt</div>
        <div className="category-card">Productivity</div>
        <div className="category-card">More +</div>
      </div>
    </section>
  );
}

export default TextWritingSection;