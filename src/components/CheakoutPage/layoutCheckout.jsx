/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import AddressForm from './addressForm';
import AddressSection from './addressSection';

function LayoutCheckout() {
	const [activeTab, setActiveTab] = useState('billing');
	const [isAddAddress, setIsAddAddress] = useState(false);

	const [discountCode, setDiscountCode] = useState('');
  	const [shippingMethod, setShippingMethod] = useState('');

  	const handleApplyCoupon = () => {
    // Logic to apply the coupon
  	};

  	const handleShippingChange = (event) => {
    setShippingMethod(event.target.value);
  		};


      const { cart } = useSelector((state) => state.cart);
      const [subtotal, setSubtotal] = useState(0);

      useEffect(() => {
        if (cart?.data?.items) {
          const calculatedSubtotal = cart.data.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
          setSubtotal(calculatedSubtotal);
        }
      }, [cart]);
	

      function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}

      const handlePayment = async () => {


        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
      );
    
      if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
      }
    
      // creating a new order
      const result = await axios.post("http://192.168.15.226:2000/order/create-order",{amount:200*100});
    
      if (!result) {
          alert("Server error. Are you online?");
          return;
      }
    
      // Getting the order details back
      const { amount, id: order_id, currency } = result.data;
    
      const options = {
          key: "rzp_test_JXk4bPiTJlmuzu", // Enter the Key ID generated from the Dashboard
          amount: amount.toString(),
          currency: currency,
          name: "Soumya Corp.",
          description: "Test Transaction",
          image: '',
          order_id: order_id,
          handler: async function (response) {
              const data = {
                  orderCreationId: order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
              };
    
              const result = await axios.post("http://localhost:5000/payment/success", data);
    
              alert(result.data.msg);
          },
          prefill: {
              name: "Soumya Dey",
              email: "SoumyaDey@example.com",
              contact: "9999999999",
          },
          notes: {
              address: "Soumya Dey Corporate Office",
          },
          theme: {
              color: "#61dafb",
          },
      };
    
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    

        // try {
        //  console.log("clicked")
        //   const orderResponse = await axios.post('http://192.168.15.226:2000/order/create-order', { amount: 50000 }); // amount in paise (50000 paise = INR 500)
    
        //   const options = {
        //     key: "rzp_test_UDrOgn2XyOACqH", 
        //     amount: orderResponse.data.amount,
        //     currency: 'INR',
        //     name: 'Your Company Name',
        //     description: 'Test Transaction',
        //     order_id: orderResponse.data.id,
        //     handler: function (response) {
        //       alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        //     },
        //     prefill: {
        //       name: 'John Doe',
        //       email: 'john.doe@example.com',
        //       contact: '9999999999',
        //     },
        //     notes: {
        //       address: 'Corporate Office',
        //     },
        //     theme: {
        //       color: '#F37254',
        //     },
        //   };
    
        //   const rzp1 = new window.Razorpay(options);
        //   rzp1.open();
        // } catch (error) {
        //   console.error('Payment failed', error);
        // }
      };

	

	return (
        <>
        
         <h1 className="text-2xl font-bold  mx-[2%]">Addresses</h1>
		<div class='p-5 flex '>
            
			{isAddAddress ? (
				<AddressForm />
			) : (
				<AddressSection
					setIsAddAddress={setIsAddAddress}
					isAddAddress={isAddAddress}
					
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			)}
			<div>

			<div className="max-w-lg mx-auto p-4">
      {/* Apply Coupon Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Apply Coupon</h2>
        <div className="flex">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Discount code"
            className="flex-grow p-2 border border-gray-300 rounded-l"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-green-500 text-white px-4 py-2 rounded-r"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

        {/* Products List */}
        <div className="mb-4">
        {cart?.data?.items?.map((item,index)=> (
          <>
          {console.log(item,"purchase")}
          <div className="flex justify-between mb-2">
            <span>{item?.productName}X{item?.quantity}</span>
            <span>{item?.price}*{item?.quantity}</span>
          </div>
        
          </>
           ))}
        </div>

        {/* Subtotal, Discount, and Shipping */}
        <div className="border-t pt-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>SUBTOTAL</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>DISCOUNT COUPON (-)</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping (+)</span>
          </div>
          <div className="ml-4">
            <div className="mb-2">
              <input
                type="radio"
                id="freeShipping"
                name="shipping"
                value="free"
                checked={shippingMethod === 'free'}
                onChange={handleShippingChange}
                className="mr-2"
              />
              <label htmlFor="freeShipping">Home Delivery Free Shipping</label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="paidShipping"
                name="shipping"
                value="paid"
                checked={shippingMethod === 'paid'}
                onChange={handleShippingChange}
                className="mr-2"
              />
              <label htmlFor="paidShipping">Shipping Rule Based on qty(6-10) ₹190</label>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="border-t pt-4 mb-4">
          <div className="flex justify-between text-red-500 text-xl font-semibold">
            <span>Total</span>
            <span>₹744.00</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-2 mb-4">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border-solid border-2 border-green-600 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">CASH ON DELIVERY</button>
          {/* <button className="w-full bg-gray-100 py-2 rounded">stripe</button> */}
          <button  onClick={() => handlePayment()} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border-solid border-2 border-green-600 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"> Razorpay </button>

          {/* <button className="w-full bg-gray-100 py-2 rounded">Flutterwave</button>
          <button className="w-full bg-gray-100 py-2 rounded">mollie</button>
          <button className="w-full bg-gray-100 py-2 rounded">instamojo</button>
          <button className="w-full bg-gray-100 py-2 rounded">paystack</button>
          <button className="w-full bg-gray-100 py-2 rounded">PayPal</button>
          <button className="w-full bg-gray-100 py-2 rounded">BANK PAYMENT</button>
          <button className="w-full bg-gray-100 py-2 rounded">sslcommerz</button> */}
        </div>

        {/* Place Order Button */}
        <button className="w-full bg-green-500 text-white py-2 rounded">
          Place Order Now
        </button>
      </div>
    </div>
			</div>
		</div>
        </>
	);
}

export default LayoutCheckout;
