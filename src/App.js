import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import AboutService from "./Pages/AboutService/AboutService";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Blog from "./Pages/Blog/Blog";

import Signup from "./Pages/Signup/Signup";
import Checkout from "./Pages/Checkout/Checkout";

import ManageItem from "./Pages/ManageItem/ManageItem";

import About from "./Pages/About/About";
import MyItems from "./Pages/MyItems/MyItems";
import InventoryPage from "./Pages/InventoryPage/InventoryPage";
import AddItems from "./Pages/AddedItems/AddedItems";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/home" element={<Home></Home>}></Route>
				<Route path="/service" element={<AboutService></AboutService>}></Route>
				<Route path="/service" element={<AboutService></AboutService>}></Route>
				<Route path="/blog" element={<Blog></Blog>}></Route>
				<Route path="/myItems" element={<MyItems></MyItems>}></Route>
				<Route path="/addItems" element={<AddItems></AddItems>}></Route>
				<Route path="/manageItem" element={<ManageItem></ManageItem>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route
					path="/inventory/:inventoryId"
					element={
						<RequireAuth>
							<InventoryPage></InventoryPage>
						</RequireAuth>
					}
				></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/signup" element={<Signup></Signup>}></Route>
				<Route path="/checkout" element={<Checkout></Checkout>}></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>

			<Footer></Footer>
		</div>
	);
}

export default App;
