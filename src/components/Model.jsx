import React from "react";
import ChangeAddress from "./ChangeAddress";

const Model = ({ isModelOpen, setIsModelOpen,children }) => {
	if (!isModelOpen) return null;
	return (
		<div className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50  bg-gray-800">
			<div className="bg-white rounded-lg shadow-inner p-1 w-full max-w-md">
				<button className="absolute top-4 right-8  text-gray-300 text-5xl " onClick={() => setIsModelOpen(false)}>&times;</button>
				{children}
			</div>
		</div>
	);
};

export default Model;
