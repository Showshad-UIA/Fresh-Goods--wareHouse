import React from "react";
import logo from "../../../logo.jpg";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
	const [user] = useAuthState(auth);
	const handleLogout = () => {
		signOut(auth);
	};
	return (
		<div>
			<>
				<Navbar
					collapseOnSelect
					expand="lg"
					sticky="top"
					bg="primary"
					variant="dark"
				>
					<Container>
						<Navbar.Brand as={Link} to="/">
							Fresh Goods WareHouse
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link as={Link} to="blog">
									Blogs
								</Nav.Link>
								<Nav.Link as={Link} to="inventory">
									Inventory
								</Nav.Link>
								<Nav.Link as={Link} to="manageItem">
									Manage Items
								</Nav.Link>
								<Nav.Link as={Link} to="myItems">
									My Items
								</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link as={Link} to="about">
									About
								</Nav.Link>
								{user ? (
									<button
										className="btn btn-link text-white text-decoration-none"
										onClick={handleLogout}
									>
										Logout
									</button>
								) : (
									<Nav.Link as={Link} to="login">
										Login
									</Nav.Link>
								)}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		</div>
	);
};

export default Header;
