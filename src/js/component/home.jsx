import React from "react";
import NavBar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar />
			<div className="container">
				<Jumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem."
					button="call to action!"
				/>

				<div className="row">
					<div className="col-12 col-md-3">
						<Card
							title="Card Title"
							imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti."
							button="Find out more!"
						/>
					</div>
					<div className="col-12 col-md-3">
						<Card
							title="Card Title"
							imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti."
							button="Find out more!"
						/>
					</div>
					<div className="col-12 col-md-3">
						<Card
							title="Card Title"
							imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti."
							button="Find out more!"
						/>
					</div>
					<div className="col-12 col-md-3">
						<Card
							title="Card Title"
							imageUrl="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
							button="Find out more!"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
