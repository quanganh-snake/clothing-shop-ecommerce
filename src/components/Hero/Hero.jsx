import React from "react";
import hand_icon from "./../../assets/hand_icon.png";
import arrow_icon from "./../../assets/arrow.png";
import hero_image from "./../../assets/hero_image.png";

export const Hero = () => {
	return (
		<div className="hero py-12 grid grid-cols-12 items-center justify-center" style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}>
			<div className="hero-left col-span-8 flex flex-col items-center justify-start">
				<h2 className="uppercase font-bold">NEW ARRIVALS ONLY</h2>
				<div className="font-bold text-7xl my-6">
					<div className="flex items-center">
						<p>new</p>
						<img src={hand_icon} alt="" />
					</div>
					<p>collections</p>
					<p>for everyone</p>
				</div>
				<div className="hero-latest-btn px-6 py-3 bg-red-400 flex items-center justify-around gap-4 rounded-full hover:opacity-70 cursor-pointer">
					<p className="text-white font-medium">Latest Collection</p>
					<img src={arrow_icon} alt="" />
				</div>
			</div>
			<div className="hero-right col-span-4 h-full">
				<div className="w-full h-full">
					<img src={hero_image} alt="hero image" />
				</div>
			</div>
		</div>
	);
};
