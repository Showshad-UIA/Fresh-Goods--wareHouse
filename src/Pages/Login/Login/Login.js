import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { async } from "@firebase/util";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const mailRef = useRef("");
	const refPassword = useRef("");
	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const handleButton = (e) => {
		e.preventDefault();
		const email = mailRef.current.value;
		const password = refPassword.current.value;

		signInWithEmailAndPassword(email, password);
	};

	const redirect = (e) => {
		navigate("/signup");
	};

	const [sendPasswordResetEmail] = useSignInWithEmailAndPassword(auth);
	if (user) {
		navigate(from, { replace: true });
	}

	const resetPassword = async () => {
		const email = mailRef.current.value;
		await sendPasswordResetEmail(email);
		toast("sent email");
	};
	return (
		<div className="container w-50 mx-auto">
			<h1 className="text-primary mt-3 text-center">Login</h1>
			<Form onSubmit={handleButton}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control ref={mailRef} type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						ref={refPassword}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary mx-auto d-block mb-2" type="submit">
					Login
				</Button>
			</Form>

			<p>
				Are you new at Gadget House?
				<Link
					to="/signup"
					className="text-danger text-decoration-none pe-auto "
					onClick={redirect}
				>
					Please Signup
				</Link>
			</p>
			<p>
				Forget Password?
				<button
					className="text-danger text-decoration-none pe-auto "
					onClick={resetPassword}
				>
					Reset Password
				</button>
			</p>
			<SocialLogin></SocialLogin>
			<ToastContainer />
		</div>
	);
};

export default Login;
