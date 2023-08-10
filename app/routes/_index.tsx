import React from "react";
import type { V2_MetaFunction } from "@remix-run/cloudflare";
export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Is My Server On?" },
		{ name: "description", content: "Is My Server Running?" },
	];
};

export default function Index() {
	return (
		<div id="page">
			<article>
				<h2>
					<span className="underline-text">
						Yes. You wouldn&#39;t be seeing this page otherwise.
					</span>
				</h2>
			</article>
			<footer>
				<img id="footerImg" src="./assets/footer.png" alt="footer"></img>
			</footer>
		</div>
	);
}
