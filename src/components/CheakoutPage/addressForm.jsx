import React, { useState } from 'react';
import apiRequest from '../../../utils/apiRequest';


  
const AddNewAddress = () => {

  
  const handleGoBack = () => {
    window.history.back();
  };


  const [formData, setFormData] = useState({
    "firstName": '',
    "lastName": '',
    "email": '',
    "mobile": '',
    "country": 'India',
    "state": 'Uttar Pradesh',
    "city": 'Lucknow',
    "postalCode": "226018",
    "street": 'Mashakganj',
    "type": 'Home',
    "userId": "66a125927b76f73141806db6",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   console.log("clicked")
  //   // let data=[...formData]
  //   // data['fullName']=formData['firstName'] + formData['lastName'] 
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:2000/address/add-address', formData);
  //     console.log(response.data,"successfully");
  //   } 
    
  //   let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'http://localhost:2000/address/add-address',
  //     headers: { 
  //       'Content-Type': 'application/json'
  //     },
  //     data : data
  //   };
    
  //   axios.request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
    
  //   // try {
  //   //   const response = await axios.post('http://localhost:2000/address/add-address', {...formData,"userId":"66a125927b76f73141806db6",});
  //   //   console.log(response.data,"successfully");
  //   // } 
    
  //   // catch (error) {
  //   //   console.error('There was an error!', error);
  //   // }
  // }



  const handleSubmit = async () => {
 
    await apiRequest.addAddress(formData)
      .then((res) => {
       
        alert("success")
        console.log(res,'result')
        
        
        
      })
      .catch((err) => {
        alert("unsuccess")
        
      });
  };

  
  return (
    <div class="w-[80%] ">
    <div>
    <div className=" mx-auto p-4">
      <div className="flex justify-between mb-8">
      <h1 className="text-2xl font-bold ">Add new Address</h1>
      <div>
      <button type="button" className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
        <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <button onClick={handleGoBack} className="text-blue-500 hover:underline">
      <span>Go back</span>
    </button>
      </button>
        </div>



      </div>
      
      <div >
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
              name="mobile"
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
            // required
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
              // required
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
              // required
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
            name="street"
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
          type="click"
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Save Address
        </button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default AddNewAddress