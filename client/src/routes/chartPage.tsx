import React from "react";
import NavbarComponent from "../components/navBar";
import ActiveChart from "../components/chart/chartLogic";
import InputBox from "../components/chart/chartInput";
import ChartTitle from "../components/chart/chartHeading";

const TestPage: React.FC = () => {
	return (
		<>
			<nav>
				<NavbarComponent />
			</nav>
			<section>
				<header>
					<ChartTitle />
					<InputBox />
				</header>
				<ActiveChart />
			</section>
		</>
	);
};

export default TestPage;
