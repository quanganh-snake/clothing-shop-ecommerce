import React, { useContext, useState } from "react";

import logo from "./../../assets/logo.png";
import cart_icon from "./../../assets/cart_icon.png";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const NAV_MENU = [
	{
		id: 1,
		name: "shop",
		path: "/",
	},
	{
		id: 2,
		name: "men",
		path: "/men",
	},
	{
		id: 3,
		name: "women",
		path: "/women",
	},
	{
		id: 4,
		name: "kids",
		path: "/kids",
	},
];

const Navbar = () => {
	const [currentMenu, setCurrentMenu] = useState(0);
	const { getTotalCartItems } = useContext(ShopContext);
	return (
		<div className="w-full bg-white shadow-md">
			<div className="navbar max-w-screen-2xl mx-auto flex items-center justify-around">
				<div className="nav__logo flex items-center gap-4 cursor-pointer">
					<img src={logo} alt="" />
					<p className="flex flex-col">
						<span className="font-bold">CLOTHING</span>
						<span className="italic">Shop</span>
					</p>
				</div>
				<ul className="nav__menu flex items-center gap-12">
					{NAV_MENU.map((iMenu, index) => {
						const iMenuActive = currentMenu === index;
						const handleActiveMenu = () => {
							setCurrentMenu(index);
						};
						return (
							<li onClick={handleActiveMenu} className="cursor-pointer" key={iMenu.id}>
								<Link to={iMenu.path} className={clsx("capitalize hover:opacity-70", iMenuActive ? "border-b-2 border-red-500" : null)}>
									{iMenu.name}
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="nav__login-cart flex items-center gap-5">
					<Link to="/login" className="block text-center w-40 py-2 border border-slate-300 rounded-full hover:bg-slate-100">
						Login
					</Link>
					<Link to="/cart" className="block relative cursor-pointer">
						<img src={cart_icon} alt="" />
						<span className="absolute w-5 h-5 text-[12px] flex items-center justify-center -top-1 -right-2 bg-red-500 text-white p-2 rounded-full">{getTotalCartItems()}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
