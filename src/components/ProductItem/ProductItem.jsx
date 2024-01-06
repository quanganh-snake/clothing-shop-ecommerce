import React from "react";
import imgProduct from "./../../assets/product_1.png";
import { Link } from "react-router-dom";
export const ProductItem = (props) => {
	const { id, image, name, new_price, old_price } = props;
	return (
		<Link to={`/product/${id}`} className="product__item block p-2 border cursor-pointer">
			<div className="item__thumbnail w-full mb-4 hover:scale-105 hover:transition duration-0 hover:duration-150 hover:ease-in-out">
				<img src={image} className="w-full" alt="" />
			</div>
			<div className="item__containts">
				<p className="item__name font-semibold text-[12px]">{name.length > 20 ? name.substring(0, 20) + "..." : name}</p>
				<div className="item__price flex items-center justify-between">
					<p className="line-through italic text-red-600">${old_price}</p>
					<p className="font-semibold text-green-600">${new_price}</p>
				</div>
			</div>
		</Link>
	);
};
