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
				{filterData &&
					filterData.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default ProductListing;
