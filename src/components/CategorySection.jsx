import React from "react";
import ManCategory from "../assets/Images/man-category.png";
import WomenCategory from "../assets/Images/women-category.png";
import KidsCategory from "../assets/Images/kidscategory.png";
import FamilyCategory from "../assets/Images/Family.png"

function CategorySection() {
	const categories = [
		{
			title: "Category",
			imageUrl: ManCategory,
		},
		{
			title: "Category",
			imageUrl: WomenCategory,
		},
		{
			title: "Category",
			imageUrl: KidsCategory,
		},
		{
			title: "Category",
			imageUrl: FamilyCategory,
		},
	];

	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
			{categories.map((category, index) => (
				<div
					key={index}
					className="relative h-auto px-8 py-1.5 text-white mt-4  transform transition-transform duration-300 hover:scale-105 "
				>
					<img
						className="h-full w-full object-cover rounded-lg shadow-md"
						src={category.imageUrl}
						alt="categoryImages"
					/>
					<div className="absolute z-50 bottom-1 left-12 text-gray-600" >
						<p className="text-xl font-bold">{category.title}</p>
						<p>View All</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default CategorySection;
