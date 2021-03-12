import React from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";

const NewsCarousel = () => {
	const dispatch = useDispatch();

	const productTopRated = useSelector((state) => state.productTopRated);
	const { loading, error } = productTopRated;

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<Carousel fade className=" carousel mt-5">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/images/merchandise.svg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h1 className="merchText">MERCHANDISE</h1>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/images/bsckr.svg"
					alt="Second slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default NewsCarousel;
