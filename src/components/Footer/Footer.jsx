import React from "react";
import footer_logo from "./../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="border-t-2">
			<div className="w-full flex flex-col">
				<div className="flex items-center justify-around py-6">
					<Link to='/' className="footer__brand">
						<img src={footer_logo} alt="" />
						<p>
							<span>Clothing</span>
							<span>Shop</span>
						</p>
					</Link>
					<ul className="footer__navigate flex gap-4">
						<li className="cursor-pointer">
                            <span className="font-medium hover:opacity-70">Company</span>
                        </li>
						<li className="cursor-pointer">
                            <span className="font-medium hover:opacity-70">Products</span>
                        </li>
						<li className="cursor-pointer">
                            <span className="font-medium hover:opacity-70">Offices</span>
                        </li>
						<li className="cursor-pointer">
                            <span className="font-medium hover:opacity-70">About</span>
                        </li>
						<li className="cursor-pointer">
                            <span className="font-medium hover:opacity-70">Contact</span>
                        </li>
					</ul>
					<div className="footer__social">
						<div className="footer__social--container flex items-center gap-4">
							<div className="footer__social--item">
								<img src={instagram_icon} alt="" />
							</div>
							<div className="footer__social--item">
								<img src={pintester_icon} alt="" />
							</div>
							<div className="footer__social--item">
								<img src={whatsapp_icon} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="footer__copyright border-t-2 border-purple-500">
					<p className="text-center py-6 font-semibold">Copyright @ 2024 - By QuangAnhSnake</p>
				</div>
			</div>
		</footer>
	);
};
