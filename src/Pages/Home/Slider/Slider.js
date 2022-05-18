import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import banner from "../../../images/adrian-sulyok-sczNLg6rrhQ-unsplash.png";

const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className="d-block inventory w-100"
					src={banner}
					alt="First slide"
				/>
				<Carousel.Caption>
					<div class="slider-container">
						<h3>WELCOME TO IIUM WAREHOUSE</h3>
					</div>

					<div id="slider"></div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
