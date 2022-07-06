import React from "react";
import {useData} from "../../Context/DataContext";
import "./Navbar.scss";
const Navbar = () => {
	const {state, dispatch} = useData();
	const brands = ["HIGHLANDER", "AURELIA", "ARROW"];
	const sizes = ["S", "M", "L", "XL"];
	const sortByPrice = (e) => {
		dispatch({type: "SORT_PRICE", payload: e.target.value});
	};
	return (
		<div className='navbarfilter-container'>
			<div className='category-labels'>
				<label className='category-heading'>FILTERS</label>
				<button
					onClick={() => {
						dispatch({type: "CLEAR_ALL"});
					}}
					className='category-heading1'>
					CLEAR ALL
				</button>
			</div>
			<div className='navbarfilter-price'>
				<h3 className='navbarfilter-sort'>SORT</h3>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='radio'
							name='sort'
							value='HIGH_TO_LOW_PRICE'
							onChange={(e) => sortByPrice(e)}
							checked={"HIGH_TO_LOW_PRICE" === state.sortBy}
						/>
						Price High to Low
					</label>
				</div>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='radio'
							name='sort'
							value={"LOW_TO_HIGH_PRICE"}
							onChange={(e) => sortByPrice(e)}
							checked={"LOW_TO_HIGH_PRICE" === state.sortBy}
						/>
						Price Low to High
					</label>
				</div>
			</div>
			<div className='navbar-filter-line'></div>
			<h3 className='navbarfilter-sort'>BRANDS</h3>
			{brands.map((brand) => (
				<div key={brand} className='navbarfilter-price'>
					<div className='navbarfilter-display'>
						<label className='navbarfilter-label'>
							<input
								className='navbarfilter-checkbox'
								type='checkbox'
								onChange={() =>
									dispatch({type: "FILTER_BRAND", payload: brand})
								}
								checked={state.filterBrand.includes(brand)}
							/>
							{brand}
						</label>
					</div>
				</div>
			))}
			<div className='navbar-filter-line'></div>
			<h3 className='navbarfilter-sort'>SIZES</h3>
			{sizes.map((size) => (
				<div key={size} className='navbarfilter-price'>
					<div className='navbarfilter-display'>
						<label className='navbarfilter-label'>
							<input
								className='navbarfilter-checkbox'
								type='checkbox'
								onChange={() => dispatch({type: "FILTER_SIZE", payload: size})}
								checked={state.filterSize.includes(size)}
							/>
							{size}
						</label>
					</div>
				</div>
			))}
			<div className='navbar-filter-line'></div>
			<h3 className='navbarfilter-sort'>GENDER</h3>
			<div className='navbarfilter-price'>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='checkbox'
							onChange={(e) =>
								dispatch({type: "FILTER_GENDER", payload: "MALE"})
							}
							checked={state.filterGender.includes("MALE")}
						/>
						MALE
					</label>
				</div>
			</div>
			<div className='navbarfilter-price'>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='checkbox'
							onChange={(e) =>
								dispatch({type: "FILTER_GENDER", payload: "FEMALE"})
							}
							checked={state.filterGender.includes("FEMALE")}
						/>
						FEMALE
					</label>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
