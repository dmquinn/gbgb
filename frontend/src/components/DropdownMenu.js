import React, { useState } from "react";
import { Form, Button, NavDropdown } from "react-bootstrap";

const DropdownMenu = ({ changeHandler }) => {
	// const [keyword, setKeyword] = useState("");

	// const changeHandler = () => {
	// 	// e.preventDefault();
	// 	if (keyword.trim()) {
	// 		history.push(`/search/${keyword}`);
	// 	} else {
	// 		history.push("/");
	// 	}
	// };

	return (
		<>
			<NavDropdown
				className="mx-5"
				title="genre"
				id="genre"
				style={{ color: "white" }}
			>
				<NavDropdown.Item
					value="Cold Wave"
					onChange={changeHandler("Cold Wave")}
				>
					Cold Wave
				</NavDropdown.Item>
				<NavDropdown.Item value="Punk" onChange={changeHandler("Punk")}>
					Punk
				</NavDropdown.Item>
				<NavDropdown.Item value="Ambient" onChange={changeHandler()}>
					Ambient
				</NavDropdown.Item>
				<NavDropdown.Item value="Industrial" onChange={changeHandler()}>
					Industrial
				</NavDropdown.Item>
				<NavDropdown.Item value="Techno" onChange={changeHandler()}>
					Techno
				</NavDropdown.Item>
				<NavDropdown.Item value="New Wave" onChange={changeHandler()}>
					New Wave
				</NavDropdown.Item>
			</NavDropdown>
		</>
	);
};

export default DropdownMenu;
