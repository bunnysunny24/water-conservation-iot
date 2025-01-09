import React from 'react';

const Introduction = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Why Water Conservation?</h1>
      <p className="text-gray-700 mb-4">
        Water is the lifeline of our planet, but billions of liters are wasted every year due to
        leaks, aging infrastructure, and inefficiencies. Our solution is an Intelligent Water Flow 
        and Leak Detection System, designed to minimize water wastage and promote sustainability. 
        This innovative system can help individuals, municipalities, and industries save water, 
        reduce costs, and support global conservation efforts.
      </p>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">How It Helps</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Detects leaks early to prevent water loss.</li>
        <li>Monitors real-time water usage for efficient management.</li>
        <li>Provides actionable insights to reduce operational costs.</li>
      </ul>
    </div>
  );
};

export default Introduction;
