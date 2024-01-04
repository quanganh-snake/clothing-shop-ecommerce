import React from "react";
import data_product from "./../../assets/data";
import { ProductItem } from "../ProductItem/ProductItem";
export const Popular = () => {
	return (
		<div className="popular max-w-screen-xl mx-auto mb-20">
			<h2 className="uppercase text-2xl font-bold text-center mb-2 pb-4">
				<span className="border-b-2 border-red-100">Popular in Women</span>
			</h2>
			<div className="popular__list grid grid-cols-12 items-center gap-2">
				{data_product.map((iProduct) => {
					return (
						<div key={iProduct.id} className="col-span-3">
							<ProductItem id={iProduct.id} name={iProduct.name} image={iProduct.image} new_price={iProduct.new_price} old_price={iProduct.old_price} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
