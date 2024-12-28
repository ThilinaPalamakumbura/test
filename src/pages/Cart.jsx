import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images/emptyCart.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Model from "../components/Model";
import ChangeAddress from "../components/ChangeAddress";
import {
	removeFromCart,
	increaseQuantity,
	decreseQuantity,
} from "../redux/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";

function Cart() {
	const navigate = useNavigate();
	const cart = useSelector((state) => state.cart);
	const [address, setAddress] = useState("main Steet , 0012");
	const [isModelOpen, setIsModelOpen] = useState(false);
	const dispatch = useDispatch();

	return (
		<Fragment>
			<div className="container  mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
				{cart.products.length > 0 ? (
					<div>
						<h3 className="text-2xl font-semibold mb-4 "> SHOPPING CART </h3>
						<div className="flex flex-col md:flex-row justify-between md:space-x-10  mt-8">
							<div className="md:w-2/3">
								<div className="flex justify-between border-b items-center mb-4 text-xs  font-bold ">
									<p>PRODUCTS</p>
									<div className="flex space-x-5">
										<p>PRICE</p>
										<p>QUANTITY</p>
										<p>SUBTOTAL</p>
										<p>REMOVE</p>
									</div>
								</div>
								<div>
									{cart.products.map((product) => (
										<div
											key={product.id}
											className="flex items-center justify-between p-3 border-b"
										>
											<div className="md:flex items-center space-x-2">
												<img
													className="w-16 h-16 object-contain rounded "
													src={product.image}
													alt="product image"
												/>
												<div className="flex-1 ml-4  ">
													<h3 className="text-lg font-semibold ">
														{product.name}
													</h3>
												</div>
											</div>
											<div className="flex space-x-8">
												<div className="flex space-x-8 items-center">
													<p>${product.price.toFixed(2)}</p>
												</div>
												<div className="flex items-center justify-center border">
													<button
														onClick={() => {
															dispatch(decreseQuantity(product));
														}}
														className="text-xl font-bold px-1.5 border-r"
													>
														-
													</button>
													<p className="text-xl px">{product.quantity}</p>
													<button
														onClick={() => {
															dispatch(increaseQuantity(product));
														}}
														className="text-xl font-bold px-1.5 border-l"
													>
														+
													</button>
												</div>
												<p>${(product.quantity * product.price).toFixed(2)}</p>
												<button
													onClick={() => dispatch(removeFromCart(product))}
													className="text-red-500 hover:text-red-700"
												>
													<FaTrashAlt />
												</button>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border h-96 ">
								<h3 className="text-sm font-semibold mb-5 ">Card Total </h3>
								<div className="flex justify-between mb-5  border-b pb-1">
									<span className="text-sm">Total Items</span>
									<span>{cart.totalQuantity}</span>
								</div>
								<div className="mb-4 border-b pb-2">
									<p>Shipping:</p>
									<div className="flex flex-row">
										<p className="ml-2 text-sm  ">Shipping to </p>
										<span className="ml-2 text-sm font-bold">{address}</span>
									</div>
									<button
										className="text-blue-500 hover:underline mt-1 ml-2"
										onClick={() => setIsModelOpen(true)}
									>
										change address{" "}
									</button>
								</div>
								<div className="flex justify-between mb-4 ">
									<span>Total Price :</span>
									<span>{cart.totalPrice.toFixed(2)}</span>
								</div>
								<button
									onClick={() => navigate("/checkout")}
									className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
								>
									{" "}
									Proceed to Checkout
								</button>
								<Model
									isModelOpen={isModelOpen}
									setIsModelOpen={setIsModelOpen}
								>
									<ChangeAddress
										setAddress={setAddress}
										setIsModelOpen={setIsModelOpen}
									/>
								</Model>
							</div>
						</div>
					</div>
				) : (
					<div className="relative flex items-center flex-col mx-auto p-10 ">
						<img src={EmptyCart} className="h-96 object-contain m-1" />
						<div className="absolute p-6 bottom-0">
							<p className=" text-red-600 font-bold left-5 ">
								Your cart is empty !!!!
							</p>
							<p className="text-red-500">Add Something to make me Happy :) </p>
						</div>
					</div>
				)}
			</div>
		</Fragment>
	);
}

export default Cart;
