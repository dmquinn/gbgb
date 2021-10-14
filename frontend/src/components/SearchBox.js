import React, { useState } from "react";
import { Form, Button, NavDropdown } from "react-bootstrap";

const SearchBox = ({ history }) => {
  let [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
    console.log(keyword);
  };
  const changeHandler = (eventKey) => {
    keyword = eventKey;
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
    console.log(keyword);
  };

  return (
    <>
      <Form onSubmit={submitHandler} inline>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="searchBar ml-4"
        ></Form.Control>
        <Button type="submit" className="p-2 searchButton">
          <i className="fas fa-search"></i>
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
