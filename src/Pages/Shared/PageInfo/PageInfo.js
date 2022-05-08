import React from "react";
import { Helmet } from "react-helmet-async";

const PageInfo = ({ title }) => {
	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
};

export default PageInfo;
