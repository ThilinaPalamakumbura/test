import React, { useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const products = useSelector((state) => state.cart.products);

	
	return (
		<nav className="bg=white shadow-md">
			<div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
				<div className="text-lg font-bold ">
					<Link to={"/"}>E-Shop</Link>
				</div>
				<div className="relative flex-1 mx-4">
					<form>
						<input
							className="w-full border py-2 px-4 rounded-xl"
							type="text"
							placeholder="Search product"
						/>
						<FaSearch className="absolute top-3 right-2 text-red-600"></FaSearch>
					</form>
				</div>
				<div className="flex items-center space-x-6">
					<Link className="relative" to={"/cart"}>
						<FaShoppingCart className="text-lg" />
						{products.length > 0 && (
							<span className="absolute top-0 w-4 h-4 text-xs left-5  bg-red-600 rounded-full flex justify-center items-center text-white">
								{products.length}
							</span>
						)}
					</Link>
					<button className="hidden md:block">Login | Register</button>
					<button className="block md:block lg:block">
						<FaUser />
					</button>
				</div>
			</div>
			<div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
				<Link to={"/"} className="hover:underline ">
					Home
				</Link>
				<Link to={"/shop"} className="hover:underline">
					Shop
				</Link>
				<Link to={"/"} className="hover:underline">
					Contact
				</Link>
				<Link to={"/"} className="hover:underline">
					About
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
