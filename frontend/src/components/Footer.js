import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="footer-distributed">
			<div className="footer-right">
				<a href="#">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a href="#">
					<i className="fab fa-twitter"></i>
				</a>
				<a href="#">
					<i className="fab fa-instagram"></i>
				</a>
				<a href="#">
					<i className="fa fa-github"></i>
				</a>
			</div>

			<div className="footer-left">
				<p className="footer-links">
					<a href="#">ABOUT</a>

					<a href="#">JOBS</a>

					<a href="#">CONTACT</a>
				</p>

				<p>Milk Records &copy; 2021</p>
			</div>
		</footer>
	);
};

export default Footer;
// Copyright &copy; Daniel Murphy - Milk Records 2021
