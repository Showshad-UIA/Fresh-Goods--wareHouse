import React from "react";
import { useNavigate } from "react-router-dom";
import "./InventoryPage.css";

const InventoryPage = ({ inventory }) => {
	const { id, name, img, price, supplier, description } = inventory;
	const navigate = useNavigate();
	const productDetails = (id) => {
		navigate(`/inventory/${id}`);
	};
	return (
		<div className="service">
			<img className="w-100" src={img} alt="" />
			<h2>{id}</h2>
			<h2>{name}</h2>
			<p>{price}</p>
			<p>{supplier}</p>

			<p>
				<small>{description}</small>
			</p>
			<button onClick={() => productDetails(id)} className="btn btn-secondary">
				Update Product
			</button>
		</div>
	);
};

export default InventoryPage;
