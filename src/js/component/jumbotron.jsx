import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	const styles = {
		marginBottom: "20px",
		background: "#d3d3d3",
		paddingBottom: "30px",
	};

	return (
		<div className="card" style={styles}>
			<div className="card-body">
				<h1 className="card-title">{props.title}</h1>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	button: PropTypes.string,
};

export default Jumbotron;
