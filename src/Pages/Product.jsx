import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Breadcrum } from "../components/Breadcrums/Breadcrum";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";
import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox";
import { RelateProducts } from "../components/RelateProducts/RelateProducts";
const Product = () => {
	const { all_product } = useContext(ShopContext);
	const { productId } = useParams();

    const product = all_product.find((iProduct) => parseInt(iProduct.id) == parseInt(productId));
    
	return (
		<div>
			<Breadcrum product={product} />
			<ProductDetail product={product} />
			<DescriptionBox />
			<RelateProducts />
		</div>
	);
};

export default Product;
