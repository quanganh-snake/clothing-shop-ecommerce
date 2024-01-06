import React from "react";
import arrow_icon from "./../../assets/breadcrum_arrow.png";

export const Breadcrum = (props) => {
	const { product } = props;
	return (
		<div className="breadcrum max-w-xl px-44 flex my-4">
			<div className=" flex items-center gap-2 pr-2">
				HOME
				<img src={arrow_icon} alt="" />
			</div>
			<div className=" flex items-center gap-2 pr-2">
				SHOP
				<img src={arrow_icon} alt="" />
			</div>
			<div className=" flex items-center gap-2 pr-2">
				<span className="font-semibold uppercase">{product.category}</span>
			</div>
		</div>
	);
};
