/** @format */

import React, { useState } from 'react';
import AddressForm from './addressForm';
import AddressSection from './addressSection';

function LayoutCheckout() {
	const [activeTab, setActiveTab] = useState('billing');
	const [isAddAddress, setIsAddAddress] = useState(false);
	
	



	
	

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
			<div class=' bg-pink-300 w-[20%]'>02</div>
		</div>
        </>
	);
}

export default LayoutCheckout;
