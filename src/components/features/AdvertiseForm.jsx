import React from 'react';

const AdvertiseForm = () => (
  <div className="max-w-3xl mx-auto mt-8 space-y-6">
    <h2 className="text-2xl font-semibold text-center">Tools you need to advertise</h2>
    
    <div className="space-y-4">
      <div>
        <label className="block mb-2">
          <span className="text-gray-700">
            <span className="text-red-500">*</span> Tool
          </span>
        </label>
        <input
          type="text"
          placeholder="Please enter and select the tool"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
        />
        <p className="text-gray-600 text-sm mt-1">PS: If the tool cannot be found, please submit it first.</p>
      </div>

      <div>
        <label className="block mb-2">
          <span className="text-gray-700">Ad Landing link</span>
        </label>
        <input
          type="url"
          placeholder="You can set up ad tracking link here for advertising purposes only"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Select the number of clicks you need</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[500, 1000, 5000, 10000, 20000, 50000].map((clicks) => (
            <div key={clicks} className="border rounded-lg p-4 hover:border-purple-500 cursor-pointer">
              <div className="flex justify-between items-center">
                <span>Clicks:</span>
                <span className="font-bold">{clicks}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-600">Number of clicks: --</div>
            <div className="text-2xl font-bold">Total: $ --</div>
            <div className="text-gray-600 text-sm">Cost per click: $ --</div>
          </div>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Pay $
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AdvertiseForm;