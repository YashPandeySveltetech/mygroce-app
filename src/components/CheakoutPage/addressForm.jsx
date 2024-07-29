import React, { useState } from 'react';


  
const AddNewAddress = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    address: '',
    type: 'Home'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
    <div class="row-span-3 col-span-2 ">
    <div>
    <div className=" mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Address</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Last Name*</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email Address*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              placeholder="012 3 ******"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block mb-1">Country*</label>
          <select
            name="country"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            {/* Add country options here */}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">State*</label>
            <select
              name="state"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              {/* Add state options here */}
            </select>
          </div>
          <div>
            <label className="block mb-1">City*</label>
            <select
              name="city"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            >
              <option value="">select</option>
              {/* Add city options here */}
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block mb-1">Address*</label>
          <input
            type="text"
            name="address"
            placeholder="your address here"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="type"
              value="Home"
              checked={formData.type === 'Home'}
              onChange={handleChange}
              className="form-radio text-green-500"
            />
            <span className="ml-2">Home</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="type"
              value="Office"
              checked={formData.type === 'Office'}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2">Office</span>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Save Address
        </button>
      </form>
    </div>
    </div>
  </div>
  )
}

export default AddNewAddress