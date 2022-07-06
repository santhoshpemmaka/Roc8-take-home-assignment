import {products} from "./FakeData";
export const initialState = {
	products: products,
	sortBy: "",
	filterBrand: [],
	filterSize: [],
	filterGender: [],
};

const useReducerFunction = (state = initialState, action) => {
	switch (action.type) {
		case "SORT_PRICE":
			return {
				...state,
				sortBy: action.payload,
			};
		case "FILTER_BRAND": {
			if (state.filterBrand.includes(action.payload)) {
				return {
					...state,
					filterBrand: state.filterBrand.filter(
						(brand) => brand !== action.payload
					),
				};
			} else {
				return {
					...state,
					filterBrand: [...state.filterBrand, action.payload],
				};
			}
		}
		case "FILTER_SIZE": {
			if (state.filterSize.includes(action.payload)) {
				return {
					...state,
					filterSize: state.filterSize.filter(
						(size) => size !== action.payload
					),
				};
			} else {
				return {
					...state,
					filterSize: [...state.filterSize, action.payload],
				};
			}
		}

		case "FILTER_GENDER": {
			if (state.filterGender.includes(action.payload)) {
				return {
					...state,
					filterGender: state.filterGender.filter(
						(gender) => gender !== action.payload
					),
				};
			} else {
				return {
					...state,
					filterGender: [...state.filterGender, action.payload],
				};
			}
		}
		case "CLEAR_ALL":
			return {
				...state,
				sortBy: "",
				filterBrand: [],
				filterSize: [],
				filterGender: [],
			};
		default:
			return {...state};
	}
};

export {useReducerFunction};
