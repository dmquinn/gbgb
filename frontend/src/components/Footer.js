import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="footer-distributed mt-4">
			<Col>
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
			</Col>
			<div className="footer-left">
				<Col>
					<h3>About Us</h3>
					<p className="footer-links">
						<a href="#">Mission Statement</a>

						<a href="#">Vision for the Future</a>

						<a href="#">Our Team</a>
					</p>
				</Col>
				<Col>
					<h3>Contact</h3>
					<p className="footer-links">
						<a href="#">Contact Us</a>

						<a href="#">Customer Support</a>

						<a href="#">Terms of Service</a>
					</p>
				</Col>
				<Col>
					<h3>Community</h3>
					<p className="footer-links">
						<a href="#">Share a Demo With Us</a>

						<a href="https://busckr.herokuapp.com/">BUSCKR</a>

						<a href="#">Careers</a>
					</p>
				</Col>
			</div>
			<p className="mt-5">Daniel Murphy // Milk Records &copy; 2021</p>
		</footer>
	);
};

export default Footer;
// Copyright &copy; Daniel Murphy - Milk Records 2021
