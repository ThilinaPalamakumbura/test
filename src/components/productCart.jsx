import React from "react";
import { FaStar } from "react-icons/fa";
import { addProduct } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const productCart = ({ product }) => {
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addProduct(product));
		// alert("Product Added Successfully");
	};

	return (
		<div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
			<img
				className="w-full h-48 object-contain mb-4 "
				src={product.image}
				alt="product image"
			/>
			<h3 className="text-lg text-black-700 font-semibold">{product.name}</h3>
			<p className="text-black-500">{product.price}</p>
			<div className="flex text-black-800 items-center mt-2">
				<FaStar></FaStar>
				<FaStar></FaStar>
				<FaStar></FaStar>
				<FaStar></FaStar>
				<FaStar></FaStar>
			</div>
			<div
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					handleAddToCart(product);
				}}
				className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-black text-sm rounded-full hover:w-32 hover:bg-blue-300  transform transition-all "
			>
				<span className="group-hover:hidden font-bold">+</span>
				<span className="hidden group-hover:block font-bold font-sans">
					Add to Cart
				</span>
			</div>
		</div>
	);
};

export default productCart;
