import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 ">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  ">
				<div>
					<h3 className="text-xl font-semibold">e-Shop</h3>
					<h2 className="mt-4">
						Your one-stop shop for all your needs. Shop with us and experience
						the best online shopping experience
					</h2>
				</div>
				<div className="flex flex-col md:items-center">
					<h4 className="text-lg font-semibold ">Quick Links</h4>
					<div className="">
						<ul className="mt-4 space-y-4">
							<li>
								<Link to={"/"} className="hover:underline">
									Home
								</Link>
							</li>
							<li>
								<Link to={"/shop"} className="hover:underline">
									Shop
								</Link>
							</li>
							<li>
								<Link to={"/Contact"} className="hover:underline">
									Contact
								</Link>
							</li>
							<li>
								<Link to={"/About"} className="hover:underline">
									About
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div >
					<h4 className="text-lg font-semibold ">Follow Us</h4>
					<div className="flex space-x-4 mt-4">
						<a href="" className="hover:text-gray-400">
							<FaFacebookF />
						</a>
						<a href="" className="hover:text-gray-400">
							<FaTwitter />
						</a>
						<a href="" className="hover:text-gray-400">
							<FaInstagramSquare />
						</a>
						<a href="" className="hover:text-gray-400">
							<FaLinkedin />
						</a>
					</div>
					<form className="flex items-center justify-center mt-8 ">
						<input
							type="email"
							placeholder="Enter e-mail"
							className="w-full p-2 bg-gray-800 border border-gray-600  rounded-l-lg"
						></input>
						<button className="bg-red-800 text-white px-4 py-2 rounded-r-lg border border-gray-600 ">
							Subscribe
						</button>
					</form>
				</div>
			</div>
			<div className="mt-8 border-t border-x-gray-700 pt-4 mx-auto">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
					<p>&copy; 2024 Flower Shop All rights reserved.</p>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<a href="" className="hover:underline">
							Privacy Policy
						</a>
						<a href="" className="hover:underline">
							Terms & Conditions{" "}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
