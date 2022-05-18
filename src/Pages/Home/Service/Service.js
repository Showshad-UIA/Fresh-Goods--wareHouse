import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
	const { _id, name, img, quantity, price, supplier, description } = service;
	const navigate = useNavigate();
	const serviceDetail = (id) => {
		navigate(`/inventory/${id}`);
	};
	return (
		<div className="service">
			<img className="w-100" src={img} alt="" />

			<h2>Name: {name}</h2>
			<p>Price: ${price}</p>
			<p>Quantity: {quantity}</p>
			<p>Supplier: {supplier}</p>

			<p>
				<small>{description}</small>
			</p>
			<button onClick={() => serviceDetail(_id)} className="btn btn-secondary">
				Update Product
			</button>
		</div>
	);
};

export default Service;
