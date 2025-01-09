import React, { useState } from 'react';
import Introduction from './Introduction';
import Input from './InputComponent';
import Result from './ResultDetails';
import Helpline from './Helpline';

const HomePage = () => {
  const [resultData, setResultData] = useState(null);

  const calculateResult = (values) => {
    const average = (parseInt(values.value1) + parseInt(values.value2) + parseInt(values.value3)) / 3;
    setResultData({ values, average });
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Welcome to WaterWorld</h1>
        <Introduction />
        <Input onCalculate={calculateResult} />
        {resultData && <Result data={resultData} />}
        <Result/>
        <Helpline />
      </div>
    </div>
  );
};

export default HomePage;
