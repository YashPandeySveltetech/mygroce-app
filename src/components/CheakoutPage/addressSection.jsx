import React from 'react';

function AddressSection({setActiveTab,activeTab,addresses,setIsAddAddress,isAddAddress}) {
  

  

  
    const TrashIcon = ({ className }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      );
  return (
    <div class="w-[75%] mx-5 ">
    <div>
    <div className="p-4">
      <div className="flex bg-red mb-4">
        <div className="p-3 bg-green-100 border-green">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            activeTab === 'billing' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('billing')}
        >
          Billing Address
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            activeTab === 'shipping' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('shipping')}
        >
          Shipping Address
        </button>
        </div>
        <button onClick={()=>setIsAddAddress(!isAddAddress  )} className="ml-auto px-4 py-2 border border-orange-300 text-orange-300 rounded">
          Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded relative">
            <h3 className="font-bold mb-2">Address #{index + 1}</h3>
            <button className="absolute top-2 right-2 text-red-500">
              <TrashIcon className="w-5 h-5" />
            </button>
            {Object.entries(address).map(([key, value]) => (
              <p key={key} className="mb-1">
                <span className="font-semibold">{key}:</span> {value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
  )
}

export default AddressSection