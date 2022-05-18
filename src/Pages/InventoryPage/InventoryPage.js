// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const InventoryPage = () => {
// 	const { inventoryId } = useParams();

// 	const [product, setProduct] = useState({});
// 	useEffect(() => {
// 		fetch(`http://localhost:5000/products/${inventoryId}`)
// 			.then((res) => res.json)
// 			.then((data) => setProduct(data));
// 	}, [inventoryId]);
// 	const handleDeliveredToQuantity = (id) => {};

// 	return (
// 		<div className="row">
// 			<div className="col-md-6">
// 				<div className="card mx-auto products g-4 w-50">
// 					<img
// 						style={{ height: "150px", width: "150px" }}
// 						src={product.img}
// 						alt=""
// 					/>
// 					<h5> Name:{product.name}</h5>
// 					<p className="mt-0">Price:{product.price}</p>
// 					<p className="mt-0">Quantity:{product.quantity}</p>
// 					<p className="mt-0">Supplier:{product.supplier}</p>
// 					<p className="mt-0">Sold:{product.sold}</p>
// 					<button
// 						onClick={() => handleDeliveredToQuantity(product._id)}
// 						className="btn btn-primary"
// 					>
// 						Delivered
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default InventoryPage;

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const InventoryPage = () => {
	const numberRef = useRef();
	const { inventoryId } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		fetch(`http://localhost:5000/products/${inventoryId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [inventoryId]);

	const handleDeliveredToQuantity = (id) => {
		const url = `http://localhost:5000/products/${inventoryId}`;

		if (product.quantity > 0) {
			product.quantity = product.quantity - 1;
			setProduct({ ...product });
		} else {
			alert("add product");
		}
		const quantities = product.quantity;
		console.log(quantities);
		//update Quantity

		fetch(url, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ quantities: quantities }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				product.quantity = quantities;
				setProduct({ ...product });
			});
	};

	const handleAddQuantity = (id) => {
		const url = `http://localhost:5000/products/${id}`;
		const currentQuantity = parseInt(numberRef.current.value);
		let previousQuantity = parseInt(product.quantity);
		if (previousQuantity > 0) {
			product.quantity = previousQuantity + currentQuantity;
			setProduct({ ...product });
		} else {
			alert("add product");
		}
		const quantities = product.quantity;
		console.log(quantities);
		//update Quantity

		fetch(url, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ quantities: quantities }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				product.quantity = quantities;
				setProduct({ ...product });
			});
	};

	return (
		<div className="h-75 bg-secondary inventory">
			<h1 className="text-center">Product name: {product.name}</h1>

			<div className="row">
				<div className="col-md-6">
					<div className="card mx-auto product g-4 w-50">
						<img
							style={{ height: "150px", width: "150px" }}
							src={product.img}
							alt=""
						/>
						<h5> Name:{product.name}</h5>
						<p className="mt-0">{product.description}</p>
						<h5 className="mt-0">Price:${product.price}</h5>
						<p className="mt-0">Quantity:{product.quantity}</p>
						<p className="mt-0">Supplier:{product.supplier}</p>
						<p className="sold">Sold</p>
						<button
							onClick={() => handleDeliveredToQuantity(product._id)}
							className="btn btn-primary"
						>
							Delivered
						</button>
					</div>
				</div>
				<div className="col-md-6">
					<form onSubmit={() => handleAddQuantity(product._id)}>
						<input ref={numberRef} type="number" placeholder="Add Quantity" />
						<br />

						<button className="btn btn-primary mt-2">Add Quantity</button>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default InventoryPage;
