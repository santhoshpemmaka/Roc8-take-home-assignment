export const sortByPrice = (state, data) => {
	if (state.sortBy === "HIGH_TO_LOW_PRICE") {
		const result = [...data].sort((product1, product2) => {
			return Number(product2.discountCost) - Number(product1.discountCost);
		});
		return result;
	}
	if (state.sortBy === "LOW_TO_HIGH_PRICE") {
		const result1 = [...data].sort((product1, product2) => {
			return Number(product1.discountCost) - Number(product2.discountCost);
		});
		return result1;
	}
	return data;
};

export const filterByData = (state, data) => {
	let newData = [...data];
	if (state.filterBrand.length !== 0) {
		newData = newData.filter((product) =>
			state.filterBrand.includes(product.brand)
		);
	}
	if (state.filterSize.length !== 0) {
		newData = newData.filter((product) =>
			product.sizes.filter((size) => state.filterSize.includes(size)).length > 0
				? true
				: false
		);
	}
	// console.log(["S", "M"].includes("S"));
	if (state.filterGender.length !== 0) {
		newData = newData.filter((product) => {
			return state.filterGender.includes(product.gender);
		});
	}

	return newData;
};
