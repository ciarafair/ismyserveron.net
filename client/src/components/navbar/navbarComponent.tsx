import React from "react";

const NavbarComponent: React.FC = () => {
	return (
		<>
			<nav>
				<a href="/">
					<button>Front-end</button>
				</a>
				<a href="/test">
					<button>Testing</button>
				</a>
				<a href="http://localhost:6868">
					<button>Back-end</button>
				</a>
			</nav>
		</>
	);
}

export default NavbarComponent;
