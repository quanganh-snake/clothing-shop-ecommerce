import React, { useContext } from "react";
import { ShopContext } from "./../../Context/ShopContext";
import remove_icon from "./../../assets/cart_cross_icon.png";

export const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    console.log("🚀 ~ file: CartItems.jsx:8 ~ CartItems ~ totalAmount:", totalAmount)
	return (
		<div className="cart-item__box container mx-auto my-20">
			<div className="cart-item__container border flex">
				<p className="block w-full px-3 py-2 text-center font-semibold border-r">Products</p>
				<p className="block w-full px-3 py-2 text-center font-semibold border-r">Title</p>
				<p className="block w-full px-3 py-2 text-center font-semibold border-r">Price</p>
				<p className="block w-full px-3 py-2 text-center font-semibold border-r">Quantity</p>
				<p className="block w-full px-3 py-2 text-center font-semibold border-r">Total</p>
				<p className="block w-full px-3 py-2 text-center font-semibold border-r">Remove</p>
			</div>
			{all_product.map((iProduct) => {
				if (cartItems[iProduct.id] > 0) {
					return (
						<div key={iProduct.id} className="cart-item__container border flex">
							<div className="w-full px-3 py-2 text-center font-semibold border-r">
								<img src={iProduct?.image} className="block w-full" alt="carticon-product-icon" />
							</div>
							<p className="flex items-center justify-center  w-full px-3 py-2 text-center font-semibold border-r">{iProduct?.name}</p>
							<p className="flex items-center justify-center  w-full px-3 py-2 text-center font-semibold border-r">${iProduct?.new_price}</p>
							<div className="flex items-center justify-center w-full px-3 py-2 text-center font-semibold border-r">
								<button className="border px-4 py-2">{cartItems[iProduct.id]}</button>
							</div>
							<p className="flex items-center justify-center  w-full px-3 py-2 text-center font-semibold border-r">
								{"$"}
								{parseFloat(iProduct?.new_price) * parseInt(cartItems[iProduct.id])}
							</p>
							<div className="w-full px-3 py-2 flex items-center justify-center font-semibold border-r">
								<img
									src={remove_icon}
									onClick={() => {
										removeFromCart(iProduct.id);
									}}
									alt=""
								/>
							</div>
						</div>
					);
				}
				return null;
			})}
			<div className="cart-item__down grid grid-cols-12 gap-4 my-20">
				<div className="cart-item__total col-span-6">
					<h1 className="font-bold text-2xl mb-6">Cart Totals</h1>
					<div className="">
						<div className="cart-item__total--item flex items-center justify-between pb-2 mb-4 border-b-2 border-gray-400">
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<div className="cart-item__total--item flex items-center justify-between pb-2 mb-4 border-b-2 border-gray-400">
							<p>Shipping Fee</p>
							<p>Free</p>
						</div>
						<div className="cart-item__total--item flex items-center justify-between pb-2 mb-4 border-b-2 border-gray-400">
							<h3 className="font-bold ">Total</h3>
							<h3 className="font-bold ">${getTotalCartAmount()}</h3>
						</div>
					</div>
					<button className="uppercase px-3 py-2 bg-red-500 text-white font-semibold hover:opacity-70">Proceed to checkout</button>
				</div>
				<div className="col-span-2"></div>
				<div className="cart-item__promocode col-span-4">
					<p className="mb-6 font-medium text-slate-500">If you have a promo code, Enter it here</p>
					<div className="cart-item__promobox flex items-center gap-4 bg-gray-100">
						<input type="text" className="w-full bg-transparent px-3 py-2 focus:outline-none" placeholder="Promo code" />
						<button className="border px-3 py-2 bg-gray-700 text-white hover:opacity-70">Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};
