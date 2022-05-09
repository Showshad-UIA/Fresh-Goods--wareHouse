import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
	width: "100vw",
	height: "50vh",
};

const center = {
	lat: 3.255306864687442,
	lng: 101.73011973697439,
};
const position = {
	lat: 37.772,
	lng: -122.214,
};
function MyComponent() {
	return (
		<div>
			<h3 className="text-center text-secondary mt-4">Visit Us Here</h3>
			<LoadScript googleMapsApiKey="AIzaSyAZOjstpQSIdAfJBGvu9_IxHuh-CmOw-w8">
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
					{/* Child components, such as markers, info windows, etc. */}
					<Marker position={position} />
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default React.memo(MyComponent);
