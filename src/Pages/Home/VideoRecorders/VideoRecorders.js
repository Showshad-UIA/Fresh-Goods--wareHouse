import React from "react";

import videogrpher1 from "../../../images/catagory 1.jpg";
import videogrpher2 from "../../../images/catagory 2.jpg";
import videogrpher3 from "../../../images/catagory 3.jpg";
import VideoRecorder from "../VideoRecorder/VideoRecorder";

const experts = [
	{
		id: 1,
		name: "Rambutan",
		category: "Fruits",
		Country: "Malaysia",
		price: "$5",
		img: "https://i.ibb.co/cYcyfdc/Background-16.png",
	},
	{
		id: 2,
		name: "Cooking Oil",
		category: "Grocery",
		Country: "Vietnam",
		price: "$10",
		img: "https://i.ibb.co/X5myvW9/Background-15.png",
	},
	{
		id: 3,
		name: "Fresh Honey",
		category: "Grocery",
		Country: "Bangladesh",
		price: "$10",
		img: "https://i.ibb.co/p48dpSm/Background-14.png",
	},
];

const VideoRecorders = () => {
	return (
		<div className="container">
			<h2 className="text-primary text-center mt-5 mb-5">Trending Product</h2>
			<div className="row">
				{experts.map((videoRecorder) => (
					<VideoRecorder
						key={VideoRecorder.id}
						videoRecorder={videoRecorder}
					></VideoRecorder>
				))}
			</div>
		</div>
	);
};

export default VideoRecorders;
