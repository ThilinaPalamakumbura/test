import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/Images/hero-man.jpg";
import InfoSection from "../components/infoSection";
import CategorySection from "../components/CategorySection";
import ProductCart from "../components/productCart";
import Shop from "./shop";

import { setProduct } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(setProduct(mockData));
	}, []);

	return (
		<div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
			<div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
				<div className="hidden w-full md:w-3/12 md:block lg:block">
					<div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
						SHOP BY CATEGORIES
					</div>
					<ul className="space-y-4 bg-gray-100 p-3 border">
						{Categories.map((category, index) => (
							<li
								className="flex items-center text-sm font-medium  "
								key={index}
							>
								<div className="w-2 h-2 border border-red-700 rounded-full mr-2 "></div>
								{category}
							</li>
						))}
					</ul>
				</div>
				<div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
					<img
						className="h-full w-full object-cover "
						src={HeroImage}
						alt="HeroImage"
					/>
					<div className="absolute top-16 left-4">
						<p className="text-gray-600 mb-4"> Flower Store | E-shop</p>
						<h2 className="text-3xl font-bold ">WELCOME TO FLOWER BUCKET</h2>
						<p className="hidden md:block text-xl mt-2.5 font-bold text-gray-800  ">
							"Flowers are the music of the ground. From earth’s lips spoken
							without sound." – Edwin Curran{" "}
						</p>
						<div className="absolute">
							<p className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
								SHOP NOW
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<InfoSection />
			</div>
			<div>
				<CategorySection />
			</div>
			<div className="container mx-auto py-12">
				<h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer">
					{product.products.slice(0, 5).map((item, index) => (
						<ProductCart key={index} product={item} />
					))}
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-bold mb-6 text-center">Shop Products</h2>
				<Shop />
			</div>
		</div>
	);
};

export default Home;
