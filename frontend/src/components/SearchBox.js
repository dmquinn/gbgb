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
					className="mr-sm-2 ml-sm-5 searchBar"
				></Form.Control>
				<Button type="submit" className="p-2">
					Search
				</Button>
			</Form>
			<NavDropdown
				className="mx-5"
				title="genre"
				name="genre"
				id="genre"
				key={keyword}
				style={{ color: "white" }}
			>
				<NavDropdown.Item
					onSelect={changeHandler}
					eventKey="Cold Wave"
					value="Cold Wave"
				>
					Cold Wave
				</NavDropdown.Item>
				<NavDropdown.Item
					onSelect={changeHandler}
					eventKey="Punk"
					value="Punk"
				>
					Punk
				</NavDropdown.Item>
				<NavDropdown.Item
					onSelect={changeHandler}
					eventKey="Ambient"
					value="Ambient"
				>
					Ambient
				</NavDropdown.Item>
				<NavDropdown.Item
					onSelect={changeHandler}
					eventKey="Industrial"
					value="Industrial"
				>
					Industrial
				</NavDropdown.Item>
				<NavDropdown.Item
					onSelect={changeHandler}
					eventKey="Techno"
					value="Techno"
				>
					Techno
				</NavDropdown.Item>
				<NavDropdown.Item
					onSelect={changeHandler}
					eventKey="New Wave"
					value="New Wave"
				>
					New Wave
				</NavDropdown.Item>
			</NavDropdown>
		</>
	);
};

export default SearchBox;
