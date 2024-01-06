import React from "react";

const LoginSignup = () => {
	return (
		<div className="login__page max-w-xl mx-auto border my-20 p-10 rounded-lg shadow-lg">
			<div className="login__page--container">
				<h1 className="text-center uppercase font-bold text-2xl mb-6">Sign up</h1>
				<div className="login__page--fields flex flex-col gap-4 mb-6">
					<input type="text" name="" id="" className='w-full px-3 py-2 border rounded-full focus:outline-slate-400' placeholder="Your name..." />
					<input type="email" name="" id="" className='w-full px-3 py-2 border rounded-full focus:outline-slate-400' placeholder="Your email..." />
					<input type="password" name="" id="" className='w-full px-3 py-2 border rounded-full focus:outline-slate-400' placeholder="Your password..." />
				</div>
				<button className="mb-6 font-semibold bg-red-400 text-white border px-3 py-1 rounded-md hover:opacity-70">Continute</button>
				<p className="login__page--login mb-6">
					Already have an account? <span className="font-semibold text-red-500 cursor-pointer hover:opacity-70">Login here</span>
				</p>
				<div className="login__page--agree flex items-center gap-2">
					<input type="checkbox" name="" id="" />
					<p>By continuing, i gree to the terms of use & privacy policy!</p>
				</div>
			</div>
		</div>
	);
};

export default LoginSignup;
