import React from 'react';

const ResultDetails = ({ average }) => {
  const getMessage = () => {
    if (average < 50) return 'Great! Keep saving water!';
    if (average < 100) return 'Good job, but there’s room for improvement!';
    return 'High water usage detected. Take immediate action to conserve water.';
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Your Water Usage Insights</h2>
      <p className="text-gray-700">{getMessage()}</p>
    </div>
  );
};

export default ResultDetails;
