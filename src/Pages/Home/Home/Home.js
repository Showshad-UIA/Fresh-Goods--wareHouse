import React from "react";
import { Helmet } from "react-helmet-async";
import PageInfo from "../../Shared/PageInfo/PageInfo";
import Location from "../Location/Location";

import Services from "../Services/Services";
import Slider from "../Slider/Slider";

import VideoRecorders from "../VideoRecorders/VideoRecorders";

const Home = () => {
	return (
		<div>
			<PageInfo title="Home"></PageInfo>
			<Slider></Slider>
			<Services></Services>
			<VideoRecorders></VideoRecorders>
			<Location></Location>
		</div>
	);
};

export default Home;
