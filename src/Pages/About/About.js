import React from "react";
import img from "../../images/photo.png";
import "./About.css";

const About = () => {
	return (
		<div>
			<h1 className="text-center"> Know About Me</h1>
			<div className="d-flex justify-content-between container">
				<div>
					<img className="mt-5 photo" src={img} alt="" />
				</div>
				<div className="mx-5 mt-5">
					<h5>
						Hi, This is Mohammad raihanul islam from Malaysia. I am pursing my
						degree here in information Technology. Currently I am standing final
						year final semester. However, my passion is to be a good developer
						and serve the industry. I am still surviving to learn. So far my
						target is to be good developer in between this year. InshaAllah I do
						believe that I can proved it and I will be a good developer. Just I
						need to more passionate on coding. Happy coding Cheers 🙂
					</h5>
				</div>
			</div>
		</div>
	);
};

export default About;
