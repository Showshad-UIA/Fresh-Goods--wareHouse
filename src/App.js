import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import AboutService from "./Pages/AboutService/AboutService";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Signup from "./Pages/Signup/Signup";
import Checkout from "./Pages/Checkout/Checkout";

import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Inventory from "./Pages/Inventory/Inventory";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route
					path="/"
					element={
						<RequireAuth>
							<Home></Home>
						</RequireAuth>
					}
				></Route>
				<Route
					path="/home"
					element={
						<RequireAuth>
							<Home></Home>
						</RequireAuth>
					}
				></Route>
				<Route path="/service" element={<AboutService></AboutService>}></Route>
				<Route path="/service" element={<AboutService></AboutService>}></Route>

				<Route path="/blog" element={<Blog></Blog>}></Route>
				<Route
					path="/inventory/:id"
					element={
						<RequireAuth>
							<Inventory></Inventory>
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
