import React, { useEffect, useState } from "react";
import Inventory from "../../Inventory/Inventory";
import InventoryPage from "../InventoryPage/InventoryPage";

import "./InventoriesPage.css";

const InventoriesPage = () => {
	const [inventories, setInventories] = useState([]);
	useEffect(() => {
		fetch("Data.json")
			.then((res) => res.json())
			.then((data) => setInventories(data));
	}, []);

	return (
		<div id="catagory" className="container">
			<div className="row">
				<h1 className="title mt-5">Feature Product </h1>
				<div className="services-container">
					{inventories.map((inventory) => (
						<InventoryPage
							key={inventory.id}
							service={inventory}
						></InventoryPage>
					))}
				</div>
			</div>
		</div>
	);
};

export default InventoriesPage;
