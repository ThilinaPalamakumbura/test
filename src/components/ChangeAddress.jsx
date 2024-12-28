import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
    const [newAddress,setNewAddress] = useState("");
	return (

		<div className="flex flex-col justify-between space-x-2  m-4 ">

			<input
				className="w-full h-12 border p-2 mb-4"
				type="text"
				placeholder="Please type your address"
				onChange={(e) => setNewAddress(e.target.value)}
			/>

			<div className="flex justify-end space-x-2 text-white  mr-2 pb-1 pr-1">

				<button
					onClick={() => setIsModelOpen(false)}
					className="p-4 bg-gray-500 rounded-lg"
				>
					Cancel
				</button>
				<button
					onClick={(() => {setAddress(newAddress),setIsModelOpen(false)})}
					className="py-2 px-4 w-40 bg-blue-500  rounded-lg "
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default ChangeAddress;
