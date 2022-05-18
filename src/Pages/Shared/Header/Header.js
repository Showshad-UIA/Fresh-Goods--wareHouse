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
								<Nav.Link as={Link} to="home">
									Home
								</Nav.Link>
								<Nav.Link as={Link} to="blog">
									Blog
								</Nav.Link>

								{user && (
									<>
										<Nav.Link as={Link} to="manageItem" href="#manageItems">
											Manage items
										</Nav.Link>
										<Nav.Link as={Link} to="addItems" href="#addItem">
											Add item
										</Nav.Link>
										<Nav.Link as={Link} to="myItems" href="#deets">
											My Item
										</Nav.Link>
									</>
								)}
								<Nav.Link as={Link} to="about">
									About Us
								</Nav.Link>
								{user ? (
									<button
										className="btn btn-link mr-10 text-white text-decoration-none"
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
