import React from "react";

const Checkout = () => {
	return (
		<div className="mx-auto">
			<h1 className="text-center">Please Checkout Here.</h1>

			<div className="ml-5">
				<h2>Photography</h2>
				<p>$100</p>
				<p>
					<small>The wedding photography</small>
				</p>
				<button className="btn btn-primary">Checkout</button>
			</div>
		</div>
	);
};

export default Checkout;
