import React from "react";
import new_collection from "./../../assets/new_collections";
import { ProductItem } from "../ProductItem/ProductItem";

export const NewCollections = () => {
	return (
		<div className="new-collections max-w-screen-xl mx-auto mb-20">
			<h2 className="uppercase text-2xl font-bold text-center mb-2 pb-4">
				<span className="border-b-2 border-red-100">New Collections</span>
			</h2>
			<div className="collections grid grid-cols-12 items-center gap-2">
				{new_collection.map((iProduct) => {
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
