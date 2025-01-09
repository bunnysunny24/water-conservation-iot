import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const InputComponent = () => {
  const [values, setValues] = useState({ value1: 0, value2: 0, value3: 0 });
  const [average, setAverage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const avg = (parseInt(values.value1) + parseInt(values.value2) + parseInt(values.value3)) / 3;
    setAverage(avg);
  };

  const radarData = {
    labels: ['Value 1', 'Value 2', 'Value 3'],
    datasets: [
      {
        label: 'Water Usage',
        data: [values.value1, values.value2, values.value3],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Enter Your Values</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['value1', 'value2', 'value3'].map((key, index) => (
          <div key={index}>
            <label className="block text-gray-700 mb-2">Enter {key}</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              value={values[key]}
              onChange={(e) => setValues({ ...values, [key]: e.target.value })}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {average !== null && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-800">Water Usage Average: {average}</h3>
          <div className="mt-4">
            <Radar data={radarData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default InputComponent;
