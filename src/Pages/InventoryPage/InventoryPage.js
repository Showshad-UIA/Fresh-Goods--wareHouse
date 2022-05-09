import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InventoryPage.css";

const InventoryPage = ({ inventory }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/product")
			.then((res) => res.json)
			.then((data) => setProducts(data));
	});
	const { id, name, img, price, supplier, description } = inventory;
	const navigate = useNavigate();
	const productDetails = (id) => {
		navigate(`/inventory/${id}`);
	};
	return (
		<div className="service">
			{products.map((product) => (
				<li>
					<img className="w-100" src={img} alt="" />
					<h2>{product.id}</h2>
					<h2>{product.name}</h2>
					<p>{product.price}</p>
					<p>{product.supplier}</p>

					<p>
						<small>{description}</small>
					</p>
				</li>
			))}
			<button onClick={() => productDetails(id)} className="btn btn-secondary">
				Update Product
			</button>
		</div>
	);
};

export default InventoryPage;
