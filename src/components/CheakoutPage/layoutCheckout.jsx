/** @format */

import React, { useState } from 'react';
import AddressForm from './addressForm';
import AddressSection from './addressSection';

function LayoutCheckout() {
	const [activeTab, setActiveTab] = useState('billing');
	const [isAddAddress, setIsAddAddress] = useState(false);
	const addresses = [
		{
			_id: '66a731faddec395793f6e1b4',
			userId: '66a125927b76f73141806db6',
			street: 'Sector 47',
			city: 'Gurgown',
			state: 'Haryana',
			postalCode: '122001',
			country: 'INDIA',
			createdAt: '2024-07-29T06:08:58.998Z',
			updatedAt: '2024-07-29T06:08:58.998Z',
			__v: 0,
		},
		{
			_id: '66a73203ddec395793f6e1b6',
			userId: '66a125927b76f73141806db6',
			street: 'Sector 48',
			city: 'Gurgown',
			state: 'Haryana',
			postalCode: '122001',
			country: 'INDIA',
			createdAt: '2024-07-29T06:09:07.627Z',
			updatedAt: '2024-07-29T06:09:07.627Z',
			__v: 0,
		},
	];

	return (
        <>
         <h1 className="text-2xl font-bold mb-4">Add New Address</h1>
		<div class='grid grid-rows-3 p-20 grid-flow-col gap-4'>
            
			{isAddAddress ? (
				<AddressForm />
			) : (
				<AddressSection
					setIsAddAddress={setIsAddAddress}
					isAddAddress={isAddAddress}
					addresses={addresses}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			)}
			<div class=' bg-pink-300'>02</div>
		</div>
        </>
	);
}

export default LayoutCheckout;
