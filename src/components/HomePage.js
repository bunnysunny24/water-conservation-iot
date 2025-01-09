import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Welcome to WaterWorld</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Water: Earth's Most Precious Resource</h2>
          <p className="text-gray-700 mb-4">
            Water covers about 71% of the Earth's surface and is vital for all known forms of life.
            Despite this abundance, only 2.5% of Earth's water is freshwater, and only a small
            fraction of that is accessible for human use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Water Conservation Tips</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Fix leaky faucets and pipes</li>
                <li>Take shorter showers</li>
                <li>Use water-efficient appliances</li>
                <li>Collect rainwater for gardens</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Did You Know?</h3>
              <p className="text-gray-700">
                The average human body is made up of 60% water. Staying hydrated is crucial
                for maintaining good health and bodily functions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
