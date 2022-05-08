import React from "react";

const VideoRecorder = ({ videoRecorder }) => {
	const { name, img, price } = videoRecorder;
	return (
		<div className=" col-sm-12 col-md-6 col-lg-4 gx-5">
			<div className="card" style={{ width: "18rem" }}>
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>

					<p className="card-text">Price:{price}</p>

					<a href="#" className="btn btn-primary">
						In Stock
					</a>
				</div>
			</div>
		</div>
	);
};

export default VideoRecorder;
