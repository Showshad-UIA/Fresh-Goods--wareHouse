import React from "react";
import { Link, useParams } from "react-router-dom";

const AboutService = () => {
	const { serviceId } = useParams();
	console.log();

	return (
		<div className="text-center">
			<h2>{serviceId}</h2>

			<Link to="/checkout">
				<button className="btn btn-primary">Proceed</button>
			</Link>
		</div>
	);
};

export default AboutService;
