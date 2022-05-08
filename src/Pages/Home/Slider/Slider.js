import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../../images/adrian-sulyok-sczNLg6rrhQ-unsplash.png";

const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img className="d-block w-100" src={banner} alt="First slide" />
				<Carousel.Caption>
					<h3>Welcome to IIUM Fresh Item warehouse</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
