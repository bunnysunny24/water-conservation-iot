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

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const InputComponent = ({ onCalculate }) => {
  const [values, setValues] = useState({ value1: 0, value2: 0, value3: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedValues = {
      value1: parseInt(values.value1, 10) || 0,
      value2: parseInt(values.value2, 10) || 0,
      value3: parseInt(values.value3, 10) || 0,
    };
    const avg = (parsedValues.value1 + parsedValues.value2 + parsedValues.value3) / 3;
    onCalculate({ ...parsedValues, average: avg.toFixed(2) });
  };

  const radarData = {
    labels: ['Value 1', 'Value 2', 'Value 3'],
    datasets: [
      {
        label: 'Water Usage',
        data: [
          parseInt(values.value1, 10) || 0,
          parseInt(values.value2, 10) || 0,
          parseInt(values.value3, 10) || 0,
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center bg-blue-100">
        <div className="w-full max-w-lg p-7">
          <Radar data={radarData} />
        </div>
      </div>
      <div className="flex-1 bg-white p-8">
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
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputComponent;
