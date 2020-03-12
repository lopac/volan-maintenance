import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";

const App = () => (
	<Container style={{ marginTop: "10%" }}>
		<div className="text-center text-light">
			<p style={{ fontSize: "50px" }} className="text-light">
				<FontAwesomeIcon icon={faCog} spin></FontAwesomeIcon>
			</p>

			<h3>Trenutno je u tijeku izvanredno održavanje sustava.</h3>
			<h4>
				Pokušajte se vratiti kasnije.
				<br />
				Hvala na razumijevanju.
			</h4>
			<br />
			<br />

			<p style={{ letterSpacing: "5px", fontSize: "50px" }}>
				VO<span className="l-plate">L</span>AN
			</p>
		</div>
	</Container>
);

export default App;
