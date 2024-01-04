import React from "react";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Hero />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/men" element={<ShopCategory category="men" />} />
					<Route path="/women" element={<ShopCategory category="women" />} />
					<Route path="/kids" element={<ShopCategory category="kid" />} />
					<Route path="/product" element={<Product />}>
						<Route path=":productId" element={<Product />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginSignup />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
