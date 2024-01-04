import React from "react";

export const NewsLetter = () => {
	return (
		<div className="news-letter max-w-screen-xl mx-auto mb-20 py-24" style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}>
			<h2 className="uppercase text-2xl font-bold text-center mb-4">Get Exclusive Offers On Your Email</h2>
			<p className="text-center my-4">Subscribe to our newletter and stay updated</p>
			<div className="w-1/2 mx-auto rounded-full border border-slate-300 flex justify-between">
				<input type="text" className="focus:outline-none w-full px-3 py-2 bg-transparent" placeholder="Enter your email..." />
				<button className="bg-gray-700 text-white px-12 py-2 rounded-full h-full hover:opacity-70">Subscribe</button>
			</div>
		</div>
	);
};
