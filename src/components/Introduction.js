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
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li>Detects leaks early to prevent water loss.</li>
        <li>Monitors real-time water usage for efficient management.</li>
        <li>Provides actionable insights to reduce operational costs.</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Why Does This Matter?</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li>Water wastage contributes to global water scarcity, affecting 2.3 billion people annually.</li>
        <li>Unchecked leaks lead to environmental degradation and damage surrounding areas.</li>
        <li>Agriculture, which accounts for 70% of global water usage, suffers inefficiencies.</li>
        <li>Over $14 billion worth of water is lost yearly due to leaks.</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Objective</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li>Reduce water wastage by up to 40%.</li>
        <li>Provide real-time alerts for rapid issue resolution.</li>
        <li>Enable predictive maintenance to minimize downtime.</li>
        <li>Foster sustainability by conserving water resources globally.</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Applications</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Municipal Water Management:</strong> Save up to 30% of distributed water by detecting leaks early.</li>
        <li><strong>Agricultural Irrigation:</strong> Optimize irrigation systems, reducing water consumption by 20-35%.</li>
        <li><strong>Industrial Efficiency:</strong> Monitor critical pipelines to prevent downtime and losses.</li>
        <li><strong>Sustainable Housing:</strong> Detect plumbing leaks, saving homeowners up to 25% in water bills annually.</li>
        <li><strong>Environmental Protection:</strong> Minimize ecological harm by preventing contamination from leaks.</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Impactful Insights</h2>
      <p className="text-gray-700 mb-4">
        A single leak in a pipeline can waste up to 20,000 liters of water daily—enough to sustain 100 families for a week. 
        Cities implementing similar systems have seen water loss reductions of 25-40%, equating to billions of liters saved annually. 
        By 2030, half of the world's population will face water shortages, but systems like ours can help mitigate the crisis.
      </p>
    </div>
  );
};

export default Introduction;
