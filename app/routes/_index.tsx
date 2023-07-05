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
			<div className="Container">
				<section className="Block">
					<h1>Yes, my server is in fact running.</h1>
				</section>
				<article className="Block">
					<p>
						THIS IS A BLOCK
					</p>
				</article>
			</div>
		</div>
	);
}
