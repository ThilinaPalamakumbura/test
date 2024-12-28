import React from "react";
import {
	FaHeadset,
	FaLock,
	FaMoneyBill,
	FaShippingFast,
	FaTag,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const infoSection = () => {
	const infoItems = [
		{
			icon: <FaShippingFast className="text-3xl text-red-600" />,
			title: "Free Shipping",
			description: "Get your orders delivered with no extra cost",
		},
		{
			icon: <FaHeadset className="text-3xl text-red-600" />,
			title: "Support 7/24",
			description: "Get your orders delivered with no extra cost",
		},
		{
			icon: <FaMoneyBill className="text-3xl text-red-600" />,
			title: "100% Money Back gurantee",
			description: "Get your orders delivered with no extra cost",
		},
		{
			icon: <FaMoneyBill1Wave className="text-3xl text-red-600" />,
			title: "Free Shipping",
			description: "Get your orders delivered with no extra cost",
		},
		{
			icon: <FaLock className="text-3xl text-red-600" />,
			title: "Paymet secure",
			description: "Get your orders delivered with no extra cost",
		},
	];

	return (
		<div className="bg-white pb-8 pt-12">
			<div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
				{infoItems.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md px-8 py-1.5 text-white mt-4  transform transition-transform duration-300 hover:scale-105 cursor-pointer"
					>
						{item.icon}
						<h3 className="mt-4 text-xl font-semibold text-gray-800">
							{item.title}
						</h3>
						<p className="mt-2 text-gray-600">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default infoSection;
