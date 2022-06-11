import React from "react";

const Footer = () => {
	const styles = {
		marginTop: "20px",
		background: "black",
		textAlign: "center",
		fontSize: "10px",
		height: "60px",
	};

	return (
		<div className="container-fluid">
			<div className="row" style={styles}>
				<div class="col-lg-12 align-self-end text-white">
					<p>Copyright &copy; Your Website Name 2021</p>
				</div>
			</div>
		</div>
	);
};
export default Footer;
