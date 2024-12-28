
import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
	const [billingToggle, setBillingToggle] = useState(true);
	const [shippingToggle, setShippingToggle] = useState(true);
	const [paymentToggle, setPaymentToggle] = useState(true);
	const [paymentMethod, setPaymentMethod] = useState("cod");
	const products = useSelector((state) => state.cart);
	const [shippingInfo, setShippingInfo] = useState({
		address: "",
		city: "",
		zip: "",
	});

	const navigate = useNavigate();

	const handleOrder = () => {
		const newOrder = {
			products: products.products,
			orderNumber: "1234",
			shippingInformation: shippingInfo,
			totalPrice: products.totalPrice,
		};
		setOrder(newOrder);

		navigate("/order-confirmation");
	};

	return (
		<>
			<div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
				<h3 className="text-2xl font-semibold mb-4 ">CHECKOUT</h3>
				<div className="flex flex-col md:flex-row md:space-x-10 justify-between  mt-8">
					<div className="w-auto md:w-2/3">
						<div className="border p-2 mb-6">
							<div
								className=" flex items-center justify-between"
								onClick={() => setBillingToggle(!billingToggle)}
							>
								<h3 className="text-lg font-semibold mb-2">
									Billing Information
								</h3>
								{billingToggle ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
							</div>
							{billingToggle && (
								<div>
									<div className="space-y-4">
										<div>
											<label className="block text-gray-700" htmlFor="">
												Name
											</label>
											<input
												type="text"
												name="name"
												placeholder="Enter Name"
												className="w-full px-3 py-2 border"
											/>
										</div>
									</div>
									<div className="space-y-4">
										<div>
											<label className="block text-gray-700" htmlFor="">
												Email
											</label>
											<input
												className="w-full px-3 py-2 border"
												type="email"
												placeholder="Enter email"
											/>
										</div>
									</div>
									<div className="space-y-4">
										<div className="block text-gray-700">
											<label className="block text-gray-700" htmlFor="">
												Phone
											</label>
											<input
												className="w-full px-3 py-2 border"
												type="text"
												placeholder="Phone number with country code"
											/>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className="border p-2 mb-6">
							<div
								className=" flex items-center justify-between"
								onClick={() => setShippingToggle(!shippingToggle)}
							>
								<h3 className="text-lg font-semibold mb-2">
									Shipping Information
								</h3>
								{shippingToggle ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
							</div>
							{shippingToggle && (
								<div>
									<div className="space-y-4">
										<div>
											<label className="block text-gray-700" htmlFor="">
												Address
											</label>
											<input
												type="text"
												name="address"
												placeholder="Enter address"
												className="w-full px-3 py-2 border"
												onChange={(e) => {
													setShippingInfo({
														...shippingInfo,
														address: e.target.value,
													});
												}}
											/>
										</div>
									</div>
									<div className="space-y-4">
										<div>
											<label className="block text-gray-700" htmlFor="">
												City
											</label>
											<input
												className="w-full px-3 py-2 border"
												type="text"
												name="city"
												placeholder="Enter email"
												onChange={(e) => {
													setShippingInfo({
														...shippingInfo,
														city: e.target.value,
													});
												}}
											/>
										</div>
									</div>
									<div className="space-y-4">
										<div className="block text-gray-700">
											<label className="block text-gray-700" htmlFor="">
												Zip Code
											</label>
											<input
												className="w-full px-3 py-2 border"
												type="text"
												name="zip"
												placeholder="Phone number with country code"
												onChange={(e) => {
													setShippingInfo({
														...shippingInfo,
														zip: e.target.value,
													});
												}}
											/>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className="border p-2 mb-6">
							<div
								className=" flex items-center justify-between"
								onClick={() => setPaymentToggle(!paymentToggle)}
							>
								<h3 className="text-lg font-semibold mb-2">Payment Method</h3>
								{paymentToggle ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
							</div>
							{paymentToggle && (
								<div>
									<div className="space-y-4">
										<div
											onClick={() => setPaymentMethod("cod")}
											className="flex items-center mb-2"
										>
											<input
												type="radio"
												name="payment"
												checked={paymentMethod === "cod"}
												onChange={() => setPaymentMethod("cod")}
											/>
											<label className="block text-gray-700 mx-4">
												Cash on delivery
											</label>
										</div>
									</div>
									<div className="space-y-4">
										<div
											onClick={() => setPaymentMethod("dc")}
											className="flex items-center mb-2"
										>
											<input
												type="radio"
												name="payment"
												checked={paymentMethod === "dc"}
												onChange={() => setPaymentMethod("dc")}
											/>

											<label className="block text-gray-700 mx-4">
												Debit Card
											</label>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="w-auto p-6 md:w-1/3  bg-white  rounded-lg shadow-md border ">
						<h3 className="text-lg font-semibold mb-4  ">Order Summery</h3>
						<div className="space-y-4 ">
							{products.products.map((product) => (
								<div key={product.id} className="flex justify-between">
									<div className="flex items-center">
										<img
											className="w-16 h-16 object-contain rounded"
											src={product.image}
											alt="product image"
										/>
										<div className="ml-4 ">
											<h4 className="text-md font-semibold">{product.name}</h4>
											<p className="text-gray-600">
												${product.price} * {product.quantity}
											</p>
										</div>
									</div>
									<div>{product.price * product.quantity.toFixed(2)}</div>
								</div>
							))}
						</div>
						<div className="mt-4 border-t pt-4 ">
							<div className="flex justify-between">
								<span>Total Price:</span>
								<span className="font-semibold">
									${products.totalPrice.toFixed(2)}
								</span>
							</div>
						</div>
						<div>
							<button
								onClick={handleOrder}
								className=" w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800 text-center"
							>
								Place Order
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);

};

export default Checkout;
