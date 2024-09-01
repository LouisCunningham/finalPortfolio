import React, {useState} from 'react'

const pricingData = {
    monthly: [
      { tier: 'Basic', price: 69.99, features: ['Custom One-Page Website (HTML, CSS, JavaScript)', 'Basic SEO Setup (Meta tags, Alt tags)', 'Responsive Design (Mobile and Tablet Friendly)', 'Contact Form Integration (Email submission)', '1 Revision Included'] },
      { tier: 'Standard', price: 99.99, features: ['Custom Multi-Page Website (Up to 5 pages)', 'Intermediate SEO Setup (Keyword optimization, Google Analytics Integration)', 'CMS Integration (WordPress, Webflow, etc.)', 'E-commerce Integration (Up to 10 products)','3 Revisions Included',] },
      { tier: 'Pro', price: 149.99, features: ['Full Custom Website with Advanced Features (e.g., booking system, memberships)', 'Advanced SEO Setup (Technical SEO, Content Optimization, Speed Optimization)', 'Custom CMS or E-commerce Integration (Unlimited products)', 'Monthly Maintenance & Updates (Bug fixes, Content updates)','Unlimited Revisions for the First Month'] },
      ,
    ],
    yearly: [
      { tier: 'Basic', price: 499.99, features: ['Custom One-Page Website (HTML, CSS, JavaScript)', 'Basic SEO Setup (Meta tags, Alt tags)', 'Responsive Design (Mobile and Tablet Friendly)', 'Contact Form Integration (Email submission)', '1 Revision Included'] },
      { tier: 'Standard', price: 999.99, features: ['Custom Multi-Page Website (Up to 5 pages)', 'Intermediate SEO Setup (Keyword optimization, Google Analytics Integration)', 'CMS Integration (WordPress, Webflow, etc.)', 'E-commerce Integration (Up to 10 products)','3 Revisions Included'] },
      { tier: 'Pro', price: 1499.99, features: ['Full Custom Website with Advanced Features (e.g., booking system, memberships)', 'Advanced SEO Setup (Technical SEO, Content Optimization, Speed Optimization)', 'Custom CMS or E-commerce Integration (Unlimited products)', 'Monthly Maintenance & Updates (Bug fixes, Content updates)','Unlimited Revisions for the First Month'] },
     ,
    ]
  };

const PricingPage = () => {

const [isMonthly, setIsMonthly] = useState(true);

const togglePricing = () => setIsMonthly(!isMonthly);

const currentPricing = isMonthly ? pricingData.monthly : pricingData.yearly;

    
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-gray-100 space-grotesk-font">Simple, transparent pricing</h2>
                
            </div>

            <div className="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
                <div className="sm:-mx-0.5 flex">
                    <button onClick={togglePricing} className={`${isMonthly ? 'bg-black' :'bg-gray-200'}  focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white rounded-lg space-grotesk-font`}>Monthly</button>
                    <button onClick={togglePricing} className={`${isMonthly ? 'bg-gray-200' :'bg-black'}  focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white rounded-lg space-grotesk-font`}>One Time</button>
                </div>
            </div>
        </div>

        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {currentPricing.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 profile-card">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900 space-grotesk-font">{plan.tier}</h2>
                <p className="mt-4 text-3xl font-extrabold text-gray-900 roboto-mono-font">${plan.price.toFixed(2)}</p>
                <p className="mt-4 text-sm text-gray-500 roboto-mono-font">per {isMonthly ? 'month' : '*One Time'}</p>
              </div>
              <div className="pt-6 pb-8 px-6 roboto-mono-font">
                <ul role="list" className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a
                  href="#"
                  className="block w-full text-center rounded-lg bg-gray-600 hover:bg-indigo-700 px-6 py-3 text-base font-medium text-white roboto-mono-font">
                  Choose {plan.tier}
                </a>
              </div>
            </div>
          ))} 
    </div>
    </div>
</section>
    </>
  )
}

export default PricingPage