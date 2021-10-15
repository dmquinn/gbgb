import React from "react";
import { Nav } from "react-bootstrap";
import { Route } from "react-router-dom";

import SearchBox from "./SearchBox";

const Sidebar = (props) => {
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block sidebar" activeKey="/home">
        <Route render={({ history }) => <SearchBox history={history} />} />
        <h4 className="ml-5 mt-5">Categories</h4>
        <Nav.Item className="link offset-3 mt-2 p-2">
          <Nav.Link href="/search/tops">Tops</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link offset-3 p-2">
          <Nav.Link eventKey="link-1" href="/search/bottoms">
            Bottoms
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="link offset-3 p-2">
          <Nav.Link eventKey="link-2">Accessories</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link offset-3 p-2 border-bottom">
          <Nav.Link eventKey="link-2">Cool Shit</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link offset-3 p-2 mt-3">
          <Nav.Link eventKey="link-2">About</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link offset-3 p-2">
          <Nav.Link eventKey="link-2">Instagram</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link offset-3 p-2">
          <Nav.Link eventKey="link-2">Latex Care</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
