// components/ToolForm.jsx
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ToolForm = () => {
  const location = useLocation();
  const formDataFromSubmission = location.state?.formData || {};
  
  const [formData, setFormData] = useState({
    name: formDataFromSubmission.name || '',
    url: formDataFromSubmission.websiteUrl || '',
    introduction: '',
    techStack: '',
    screenshot: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData(prev => ({
      ...prev,
      screenshot: file
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 mt-8 mb-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field - Pre-filled from SubmissionForm */}
        <div>
          <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter tool name"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>

        {/* URL Field - Pre-filled from SubmissionForm */}
        <div>
          <label htmlFor="url" className="block text-base font-medium text-gray-700 mb-2">
            Website URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="url"
            name="url"
            required
            value={formData.url}
            onChange={handleInputChange}
            placeholder="https://www.example.com"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>

        {/* Introduction Field */}
        <div>
          <label htmlFor="introduction" className="block text-base font-medium text-gray-700 mb-2">
            Introduction <span className="text-red-500">*</span>
          </label>
          <textarea
            id="introduction"
            name="introduction"
            required
            value={formData.introduction}
            onChange={handleInputChange}
            placeholder="Enter tool introduction"
            rows="4"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>

        {/* Tech Stack Field */}
        <div>
          <label htmlFor="techStack" className="block text-base font-medium text-gray-700 mb-2">
            Tech Stack Type <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="techStack"
            name="techStack"
            required
            value={formData.techStack}
            onChange={handleInputChange}
            placeholder="Enter tech stack"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>

        {/* Screenshot Upload */}
        <div>
          <label htmlFor="screenshot" className="block text-base font-medium text-gray-700 mb-2">
            Upload Screenshot <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="screenshot"
            name="screenshot"
            required
            onChange={handleFileChange}
            accept="image/*"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ToolForm;