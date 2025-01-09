import React, { useState } from 'react';
import Introduction from './Introduction';
import InputComponent from './InputComponent';
import ResultDetails from './ResultDetails';
import Helpline from './Helpline';

const HomePage = () => {
  const [resultData, setResultData] = useState(null);

  const calculateResult = (data) => {
    setResultData(data);
  };

  return (
    <div className="min-h-screen bg-blue-50 pt-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-9 mt-3 text-center">
        Welcome to WaterWorld
      </h1>

      <Introduction />
      <InputComponent onCalculate={calculateResult} />

      {resultData ? (
        <ResultDetails average={resultData.average} />
      ) : (
        <ResultDetails />
      )}

      <Helpline />
    </div>
  );
};

export default HomePage;
