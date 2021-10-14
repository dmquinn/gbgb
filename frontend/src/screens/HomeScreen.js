import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
// import things from "../data";
import banner from "../drawing.svg";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    console.log(products);
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {/* <h1 className="mt-5">{keyword}</h1> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* <div className="bannerContainer">
            <h1 className="position-absolute bottom-0 end-0 bannerText">
              Rubber Fun For Everyone
            </h1>
          </div> */}
          <h1 className="ml-5 mt-5">Collection</h1>
          <Row className="d-flex justify-content-center mt-5">
            {products.map((product, i) => (
              <Col sm={12} md={6} lg={12} xl={4}>
                <Product key={i} product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          ></Paginate>
        </>
      )}
    </>
  );
};

export default HomeScreen;
