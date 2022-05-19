import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./ManageItem.css";

// import Loading from "../Loading/Loading";

const ManageItem = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://cryptic-hamlet-64180.herokuapp.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const [loading] = useAuthState(auth);
	if (loading) {
	}

	const handleDeleteBtn = (id) => {
		const request = window.confirm("Are you sure you want to delete");
		if (request) {
			fetch(`https://cryptic-hamlet-64180.herokuapp.com/products/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					const remaining = products.filter((product) => product._id !== id);
					setProducts(remaining);
				});
		}
	};
	return (
		<div>
			<h1 className="mt-3 text-center fw-bold"> Manage Products</h1>
			<div className="container products w-50 mb-5 mx-auto row ">
				{products.map((product) => (
					<div key={product._id} className="card product row-md-3 g-4">
						<img
							style={{ height: "100px", width: "300px" }}
							src={product.img}
							alt=""
						/>
						<h5> Name:{product.name}</h5>
						<p>{product.description}</p>
						<h5 className="mt-0">Price:{product.price}</h5>
						<p className="mt-0">Quantity:{product.quantity}</p>
						<p className="mt-0">Supplier:{product.supplier}</p>
						<button
							onClick={() => handleDeleteBtn(product._id)}
							className="update-button text-black text-decoration-none"
						>
							Delete product
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ManageItem;
