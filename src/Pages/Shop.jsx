import React from "react";
import { Popular } from "../components/Popular/Popular";
import { Offers } from "../components/Offers/Offers";
import { NewCollections } from "../components/NewCollections/NewCollections";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";
import { Hero } from "../components/Hero/Hero";

const Shop = () => {
	return (
		<>
			<Hero />
			<Popular />
			<Offers />
			<NewCollections />
			<NewsLetter />
		</>
	);
};

export default Shop;
