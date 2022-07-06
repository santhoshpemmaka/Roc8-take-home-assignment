import React from "react";
import "./Header.scss";
const Header = () => {
	return (
		<div className='header-container'>
			<h2 className='header-name'>Flipkart</h2>
			<div className='right-side'>
				<h2>WishList</h2>
				<h2>Cart</h2>
			</div>
		</div>
	);
};

export default Header;
