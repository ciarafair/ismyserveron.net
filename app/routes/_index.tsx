import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Is My Server On?" },
		{ name: "description", content: "Is My Server Running?" },
	];
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Yes, my server is in fact running.</h1>
		</div>
	);
}
