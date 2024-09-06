// @ts-expect-error annoying null error
import * as React from "react";

export default function Subheading({
	commandString,
}: {
	commandString: string;
}) {
	return (
		<>
			<div className='code'>
				<p className='prompt'>
					dev&#64;website&#58;&#47;homepage&#36;&#160;
				</p>
				<p className='command'>{commandString}</p>
				<p className='caret'>&#9474;</p>
			</div>
		</>
	);
}
