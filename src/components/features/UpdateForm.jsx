import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const UpdateAI = () => {
  const [tool, setTool] = useState('');
  const [total] = useState(49);

  const updateFields = [
    { id: 'tool-name', label: 'Tool name', checked: true },
    { id: 'introduction', label: 'Introduction', checked: true },
    { id: 'tool-description', label: 'Tool description', checked: true },
    { id: 'category', label: 'Category', checked: true },
    { id: 'how-to-use', label: 'How to use', checked: true },
    { id: 'core-features', label: 'core features', checked: true },
    { id: 'use-cases', label: 'Use cases', checked: true },
    { id: 'pricing-plan', label: 'Pricing plan', checked: true },
    { id: 'faqs', label: 'FAQs', checked: true },
    { id: 'website-urls', label: 'Website URLs', checked: false },
  ];

  const handlePayment = () => {
    // Payment handling logic would go here
    console.log('Processing payment...');
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md mb-8">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Once paid, you can fill out the update
          </h1>

          <div className="mb-6">
            <label className="block mb-2">
              <span className="text-red-500">*</span> Tool
            </label>
            <input
              type="text"
              placeholder="Please enter and select the tool"
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">
              PS: If the tool cannot be found, please submit it first.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Updates support :</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {updateFields.map((field) => (
                <div
                  key={field.id}
                  className={`p-3 rounded-lg border flex items-center gap-2 ${
                    field.checked ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  {field.checked ? (
                    <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                  )}
                  <span className="text-sm">{field.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">Total: $ {total}</span>
              <button
                onClick={handlePayment}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                Pay ${total}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Need to know:</h3>
            <ol className="list-decimal pl-4 space-y-2">
              <li>
                Once the payment is complete, you will get an online page where you will be able to submit your required changes.
              </li>
              <li>
                For example, if you'd like to change the description, paste the new description in the form. You can also update the title, category,introduction, how to use, core features, use cases, pricing plan,FAQs.
              </li>
                <li>
                Important: we cannot update website URLs. If you moved to a new domain, please use a redirect link.
                </li>
                <li>
                Once updated, we need to manually review your update and approve it before it is updated on the page. If it doesn't pass, you will be refunded automatically.
                </li>
                <li>
                One payment can only be updated once, if you need to update the content again after this update, please buy again. Please confirm before updating.
                </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAI;