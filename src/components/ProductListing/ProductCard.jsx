import React from "react";
import "./ProductListing.scss";
const ProductCard = ({product}) => {
	return (
		<div className='product-listing-card' key={product.id}>
			<div className='product-listing-image'>
				<img
					className='product-responsive-image'
					src={product.image}
					alt='product-image'
				/>
			</div>
			<div className='product-listing-description'>
				<h4>
					{product.name} by {product.brand}
				</h4>
				<p>{product.DESC}</p>
				<div className='product-listing-display-price'>
					<span className='product-listing-price discount-price'>
						Rs. {product.discountCost}
					</span>
					<span className='product-listing-price actual-price'>
						Rs. {product.actualCost}
					</span>
				</div>
				<div className='product-sizes'>
					<label>
						Size:
						{product.sizes.map((size) => (
							<span key={size}>{size}</span>
						))}
					</label>
				</div>

				<button className='product-listing-btn product-in-stock'>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
