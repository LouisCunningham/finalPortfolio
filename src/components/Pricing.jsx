import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <div className=" dark:bg-gray-900 min-h-screen ">
      <div className="container px-6 py-8 mx-auto min-h-full h-100 object-center ">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white space-grotesk-font">Available Plans</h1>
     

        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
          <div
            className={`flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700 ${selectedPlan === 'Basic' ? 'border-blue-500' : ''}`}
            onClick={() => handlePlanSelect('Basic')}
          >
            <div className="flex flex-col items-center space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200 roboto-mono-font">Basic</h2>
            </div>
            <div className="flex flex-col items-center space-y-1">
              
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-500 sm:text-3xl roboto-mono-font">$499 <span className="text-base font-medium roboto-mono-font">(One Time)</span></h2>
            </div>
          </div>

          <div
            className={`flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700 ${selectedPlan === 'Standard' ? 'border-blue-500' : ''}`}
            onClick={() => handlePlanSelect('Standard')}
          >
            <div className="flex flex-col items-center space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 dark:text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200 roboto-mono-font">Standard</h2>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full dark:text-blue-400 sm:px-4 sm:py-1 dark:bg-gray-700 roboto-mono-font">
                99$/ Monthly
              </div>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-500 sm:text-3xl roboto-mono-font">$999 <span className="text-base font-medium roboto-mono-font">(One Time)</span></h2>
            </div>
          </div>

          <div
            className={`flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700 ${selectedPlan === 'Pro' ? 'border-blue-500' : ''}`}
            onClick={() => handlePlanSelect('Pro')}
          >
            <div className="flex flex-col items-center space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200 roboto-mono-font">Pro</h2>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full dark:text-blue-400 sm:px-4 sm:py-1 dark:bg-gray-700 roboto-mono-font">
                $1999 (One Time)
              </div>
              <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300 roboto-mono-font">$149<span className="text-base font-medium roboto-mono-font">/Month</span></h2>
            </div>
          </div>
        </div>

        {selectedPlan && (
          <div className="p-8 mt-8 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl ease-in-out roboto-mono-font">
            {selectedPlan === 'Basic' && (
              <>
                <PlanFeature feature="Custom One-Page Website (HTML, CSS, JavaScript)" />
                <PlanFeature feature="Basic SEO Setup (Meta tags, Alt tags)" />
                <PlanFeature feature="Responsive Design (Mobile and Tablet Friendly)" />
                <PlanFeature feature="Contact Form Integration (Email submission)" />
                <PlanFeature feature="1 Revision Included" />
              </>
            )}
            {selectedPlan === 'Standard' && (
              <>
                <PlanFeature feature="Custom Multi-Page Website (Up to 5 pages)" />
                <PlanFeature feature="Intermediate SEO Setup (Keyword optimization, Google Analytics Integration)" />
                <PlanFeature feature="CMS Integration (WordPress, Webflow, etc.)" />
                <PlanFeature feature="E-commerce Integration (Up to 10 products)" />
                <PlanFeature feature="3 Revisions Included" />
              </>
            )}
            {selectedPlan === 'Pro' && (
              <>
                <PlanFeature feature="Full Custom Website with Advanced Features (e.g., booking system, memberships)" />
                <PlanFeature feature="Advanced SEO Setup (Technical SEO, Content Optimization, Speed Optimization)" />
                <PlanFeature feature="Custom CMS or E-commerce Integration (Unlimited products)" />
                <PlanFeature feature="Monthly Maintenance & Updates (Bug fixes, Content updates)" />
                <PlanFeature feature="Unlimited Revisions for the First Month" />
              </>
            )}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 poppins-regular">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

const PlanFeature = ({ feature }) => (
  <div className="flex items-center justify-between text-gray-800 dark:text-gray-200 transition duration-500 ease-in-out">
    <p className="text-lg sm:text-xl">{feature}</p>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  </div>
);

export default Pricing;
