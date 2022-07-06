import React from "react";
import "./ProductListing.scss";
import {useData} from "../../Context/DataContext";
import ProductCard from "./ProductCard";
import {sortByPrice, filterByData} from "./dataFilter";

const ProductListing = () => {
	const {state} = useData();
	const {products} = state;
	const filterPrice = sortByPrice(state, products);
	const filterData = filterByData(state, filterPrice);

	return (
		<div className='productlisting-container'>
			<div className='spacer-3rem'></div>
			<div className='grid-3-columnlayout'>
				{filterData.length > 0 ? (
					filterData.map((product) => (
						<ProductCard product={product} key={product.id} />
					))
				) : (
					<h1>Particular filter has no products. Try other filter :)</h1>
				)}
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default ProductListing;
