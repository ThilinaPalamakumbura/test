import React, { useEffect } from "react";
import { mockData } from "../assets/mockData";
import ProductCart from "../components/productCart";

import { setProduct } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Shop() {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(setProduct(mockData));
	}, []);

	return (
		<div className="container mx-auto py-12">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer">
				{product.products.map((item, index) => (
					<ProductCart key={index} product={item} />
				))}
			</div>
		</div>
	);
}

export default Shop;
