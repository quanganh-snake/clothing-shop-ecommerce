import React from "react";
import star_icon from "./../../assets/star_icon.png";
import star_dull_icon from "./../../assets/star_dull_icon.png";

export const ProductDetail = (props) => {
	const { product } = props;
	return (
		<div className="product-detail max-w-7xl mx-auto grid grid-cols-12 gap-10 items-start justify-between my-20">
			<div className="product-detail__left flex gap-4 col-span-4">
				<div className="product-detail__left--img__list flex flex-col gap-3">
					<img src={product.image} className="w-20" alt="" />
					<img src={product.image} className="w-20" alt="" />
					<img src={product.image} className="w-20" alt="" />
					<img src={product.image} className="w-20" alt="" />
				</div>
				<div className="product-detail__img block h-full">
					<img src={product.image} className="h-full" alt="image product main" />
				</div>
			</div>
			<div className="product-detail__right col-span-8">
				<h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
				<div className="product-detail__right--star flex items-center gap-1 mb-4">
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_dull_icon} alt="" />
					<p>(123)</p>
				</div>
				<div className="product-detail__right--prices flex items-center gap-6 mb-4">
					<div className="price--old font-bold text-xl line-through">${product.old_price}</div>
					<div className="price--new font-bold text-xl text-red-400">${product.new_price}</div>
				</div>
				<div className="product-detail__right--description mb-6">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores explicabo corporis voluptatem voluptates quod perferendis, numquam quam nisi, ipsam a debitis ut non vero
					voluptate quas consequatur assumenda fugiat sed fuga maiores! Maxime distinctio ex ipsum explicabo asperiores commodi labore qui nulla quaerat ad reiciendis iste fuga, tenetur
					blanditiis unde. Autem in earum quos delectus illo cum quisquam dolorum maiores nobis adipisci sit, aspernatur, facilis explicabo possimus distinctio accusamus? Cumque culpa aut
					excepturi, itaque quae laborum exercitationem voluptates ad inventore deleniti enim illum laudantium, qui pariatur molestiae perferendis eum necessitatibus eius. Incidunt repellat
					optio illo ratione fugit sit labore?
				</div>
				<div className="product-detail__right--size mb-6">
					<h2 className="font-semibold mb-4">Select Size</h2>
					<div className="size--choose flex items-center gap-4">
						<div className="py-3 px-4 border font-medium cursor-pointer hover:bg-gray-200">S</div>
						<div className="py-3 px-4 border font-medium cursor-pointer hover:bg-gray-200">M</div>
						<div className="py-3 px-4 border font-medium cursor-pointer hover:bg-gray-200">L</div>
						<div className="py-3 px-4 border font-medium cursor-pointer hover:bg-gray-200">XL</div>
						<div className="py-3 px-4 border font-medium cursor-pointer hover:bg-gray-200">XXL</div>
					</div>
				</div>
				<button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:opacity-70">Add to cart</button>
				<p className="my-6">
					<span className="font-semibold">Category : </span>
					<span>Women, T-Shirt, Crop Top</span>
				</p>
				<p className="">
					<span className="font-semibold">Tags : </span>
					<span>Modern, Latest</span>
				</p>
			</div>
		</div>
	);
};
