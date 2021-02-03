import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;
	const redirect = location.search ? location.search.split("=")[1] : "/";

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage("Passwords don't match");
		}
		dispatch(register(name, email, password));
	};

	return (
		<FormContainer>
			<h1>Sign Up</h1>
			{error && <Message variant="danger">{message}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="name">
					<Form.Label>name</Form.Label>
					<Form.Control
						onChange={(e) => setName(e.target.value)}
						value={name}
						type="name"
						placeholder="Enter Name"
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>EmailAdress</Form.Label>
					<Form.Control
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						placeholder="Enter Email"
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>password</Form.Label>
					<Form.Control
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="password"
						placeholder="Enter password"
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="confirmPassword">
					<Form.Label>Confirm password</Form.Label>
					<Form.Control
						onChange={(e) => setConfirmPassword(e.target.value)}
						value={confirmPassword}
						type="password"
						placeholder="Confirm password"
					></Form.Control>
				</Form.Group>
				<Button type="submit" variant="primary">
					Register
				</Button>
			</Form>
			<Row className="py-3">
				<Col>
					Have an Account?
					<Link
						to={redirect ? `/login?redirect=${redirect}` : `/login`}
					>
						Login
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default RegisterScreen;
