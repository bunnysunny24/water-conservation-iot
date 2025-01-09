import React from 'react';

const ResultDetails = ({ average }) => {
  const getMessage = () => {
    if (!average) return 'No data available. Please submit your values.';
    if (average < 50) return 'Great! Keep saving water!';
    if (average < 100) return 'Good job, but there’s room for improvement!';
    return 'High water usage detected. Take immediate action to conserve water.';
  };

  return (
    <div className="bg-green-50 p-8 mt-4 rounded shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Your Water Usage Insights</h2>
      <p className="text-gray-700 text-lg">{getMessage()}</p>
      {average && <p className="text-gray-600 mt-2">Your average water usage is: {average}</p>}
    </div>
  );
};

export default ResultDetails;
