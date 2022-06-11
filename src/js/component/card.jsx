import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	const styles = {
		textAlign: "center",
	};

	return (
		<div className="card" style={styles}>
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="card-footer border-light">
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
	button: PropTypes.string,
};

export default Card;
