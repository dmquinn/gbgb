import React from "react";
import { Nav } from "react-bootstrap";
import { Route } from "react-router-dom";

import SearchBox from "./SearchBox";
import { withRouter } from "react-router";

const Sidebar = (props) => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Route render={({ history }) => <SearchBox history={history} />} />
        <h4 className="ml-5 mt-5">Categories</h4>
        <Nav.Item className="link ml-3 mt-2 p-2">
          <Nav.Link href="/home">Tops</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link ml-3 p-2">
          <Nav.Link eventKey="link-1">Bottoms</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link ml-3 p-2">
          <Nav.Link eventKey="link-2">Accessories</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link ml-3 p-2">
          <Nav.Link eventKey="link-2">Cool Shit</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link ml-3 p-2">
          <Nav.Link eventKey="link-2">About</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link ml-3 p-2">
          <Nav.Link eventKey="link-2">Instagram</Nav.Link>
        </Nav.Item>
        <Nav.Item className="link ml-3 p-2">
          <Nav.Link eventKey="link-2">Obsidian</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
