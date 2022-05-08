import React from "react";

import Services from "../Services/Services";
import Slider from "../Slider/Slider";

import VideoRecorders from "../VideoRecorders/VideoRecorders";

const Home = () => {
	return (
		<div>
			<Slider></Slider>
			<Services></Services>
			<VideoRecorders></VideoRecorders>
		</div>
	);
};

export default Home;
