import React, { useContext } from "react";
import { ShopContext } from "./../Context/ShopContext";
import dropdown_icon from "./../assets/dropdown_icon.png";
import { ProductItem } from "./../components/ProductItem/ProductItem";

const ShopCategory = ({ banner, category }) => {
	const { all_product } = useContext(ShopContext);
	return (
		<div className="my-10 max-w-7xl mx-auto">
			<div className="banner_category w-full">
				<img src={banner} className="w-full" alt="" />
			</div>
			<div className="shop-category__sort flex items-center justify-between my-6">
				<p>
					<span className="font-medium">Showing 1-12</span> out of 36 products
				</p>
				<div className="flex items-center justify-between gap-1 px-3 py-2 border rounded-full">
					<spam>Sort by</spam>
					<div className="w-4 h-4 flex items-center pt-1">
						<img src={dropdown_icon} width={10} alt="" />
					</div>
				</div>
			</div>
			<div className="shop-category__products grid grid-cols-12 gap-4">
				{all_product.map((iProduct, index) => {
					if (category === iProduct.category) {
						return (
							<div key={iProduct.id} className="col-span-3">
								<ProductItem id={iProduct.id} name={iProduct.name} image={iProduct.image} new_price={iProduct.new_price} old_price={iProduct.old_price} />
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
			<div className="shop-category__loadmore my-6 flex items-center justify-center">
				<p className="text-center px-3 py-2 bg-purple-400 text-white rounded-full cursor-pointer hover:opacity-70 shadow-md">Explore more</p>
			</div>
		</div>
	);
};

export default ShopCategory;
