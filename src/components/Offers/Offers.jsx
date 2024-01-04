import React from "react";
import exclusive_image from "./../../assets/exclusive_image.png";
export const Offers = () => {
	return (
		<div className="offers max-w-screen-xl mx-auto mb-20" style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}>
			<div className="offers__container grid grid-cols-12 items-center justify-between px-24 py-4">
				<div className="offers__left col-span-6">
					<div className="offers__left--container flex flex-col justify-center gap-4">
						<h3 className="font-semibold text-7xl">Exclusive</h3>
						<h3 className="font-semibold text-7xl">Offers For You</h3>
						<p className="font-semibold uppercase">Only on best sellers products</p>
						<button className="w-[180px] px-6 py-2 bg-red-400 rounded-full text-white cursor-pointer hover:opacity-70">Check Now</button>
					</div>
				</div>
				<div className="offers__right col-span-6 flex justify-end">
					<img src={exclusive_image} alt="" />
				</div>
			</div>
		</div>
	);
};
