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
		<div>
			<article>
				<section>
					<img src="./resources/skeleton-l.gif" alt="skeleton left"></img>
					<h1>Yes, my server is in fact running.</h1>
					<img src="./resources/skeleton-r.gif" alt="skeleton right"></img>
				</section>
				<footer>
					<img src="./resources/dancing_skeleton.gif" alt="dancing skeleton"></img>
				</footer>
			</article>
		</div>
	);
}
