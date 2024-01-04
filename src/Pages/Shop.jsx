import React from "react";
import { Popular } from "../components/Popular/Popular";
import { Offers } from "../components/Offers/Offers";
import { NewCollections } from "../components/NewCollections/NewCollections";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";

const Shop = () => {
	return (
		<>
			<Popular />
			<Offers />
			<NewCollections />
			<NewsLetter />
		</>
	);
};

export default Shop;
