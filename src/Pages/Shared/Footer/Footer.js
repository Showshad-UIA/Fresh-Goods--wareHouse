import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box className="mt-5">
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Supplier</FooterLink>
						<FooterLink href="#">Origin</FooterLink>
						<FooterLink href="#">Stock</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Wholesale</FooterLink>
						<FooterLink href="#">Exchange</FooterLink>
						<FooterLink href="#">Export</FooterLink>
					</Column>
					<Column>
						<Heading>Contact</Heading>
						<FooterLink href="#">Klang</FooterLink>
						<FooterLink href="#">Penang</FooterLink>
						<FooterLink href="#">Kualalumpur</FooterLink>
					</Column>
					<Column>
						<Heading>Follow Us</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>Facebook</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>Instagram</span>
							</i>
						</FooterLink>

						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: "10px" }}>Youtube</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
				<h4 className="text-center mt-3 text-white">
					<FooterLink href="#">
						<i className="fab fa-youtube">
							<span style={{ marginLeft: "10px" }}>
								Copyright@fresh-Goods-Warehouse
							</span>
						</i>
					</FooterLink>
				</h4>
			</Container>
		</Box>
	);
};
export default Footer;
