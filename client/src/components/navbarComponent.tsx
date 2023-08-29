import React from "react";

const NavbarComponent: React.FC = () => {
	return (
		<>
			<a href="/">
				<button>Front-end</button>
			</a>
			<a href="/test">
				<button>Testing</button>
			</a>
			<a href="https://backend2.ismyserveron.net">
				<button>Back-end</button>
			</a>
		</>
	);
}

export default NavbarComponent;
