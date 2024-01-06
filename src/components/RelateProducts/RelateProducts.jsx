import React from "react";
import data_product from "./../../assets/data";
import { ProductItem } from "../ProductItem/ProductItem";

export const RelateProducts = () => {
	return (
		<div className="relate-box max-w-screen-xl mx-auto mb-20">
			<h1 className="text-4xl font-bold text-center mb-16">
				<span className="pb-2 border-b-4 border-purple-200">Related Products</span>
			</h1>
			<div className="related-list grid grid-cols-12 items-center gap-2">
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
