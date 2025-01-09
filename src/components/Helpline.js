import React from 'react';

const Helpline = () => {
  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">Government Helpline & Resources</h2>
      <p className="text-gray-700 mb-4">
        For immediate assistance with water-related issues, please contact the helpline below.
      </p>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Water Conservation Helpline: 1800-123-456</li>
        <li>Leak Reporting: 1800-654-321</li>
        <li>Emergency Services: 911</li>
      </ul>
      <p className="text-gray-700 mt-4">
        Visit the <a href="https://www.water.gov" className="text-blue-600 underline">Government Water Resources</a> page for more details.
      </p>
    </div>
  );
};

export default Helpline;
