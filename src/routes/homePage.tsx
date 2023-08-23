import React from "react";

const HomePageElement: React.FC = () => (
	<>
		<article>
			<h1>
				Is my server running?
			</h1>
			<h2>
				{`>`} If you're seeing this then yes, it is up.
			</h2>
		</article>
	</>
);

export default HomePageElement;
