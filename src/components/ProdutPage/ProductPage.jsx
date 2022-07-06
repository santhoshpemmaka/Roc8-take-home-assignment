import React from "react";
import ProductListing from "../ProductListing/ProductListing";
import Navbar from "../Navbar/Navbar";
import "./ProductPage.scss";
const ProductPage = () => {
	return (
		<div className='productpage-container'>
			<Navbar />
			<ProductListing />
		</div>
	);
};

export default ProductPage;
