import React from "react";
import {
	useSignInWithGithub,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
	const navigate = useNavigate();
	let errorElement;
	if (error || error1) {
		errorElement = (
			<div>
				<p className="text-danger">
					Error: {error?.message} {error1.message}
				</p>
			</div>
		);
	}
	if (user || user1) {
		navigate("/home");
	}

	return (
		<div>
			<p className="text-center">or</p>

			<div d-flex align-items-center>
				{errorElement}
				<button
					onClick={() => signInWithGoogle()}
					className="d-block btn btn-primary mx-auto w-50 mb-3"
				>
					Google Sign In
				</button>
				<button
					onClick={() => signInWithGithub()}
					className="  d-block btn btn-primary mx-auto w-50"
				>
					Github Sign In
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
