// @ts-expect-error annoying null error
import * as React from "react";

export default function DeveloperCommand({
	commandString,
}: {
	commandString: string;
}) {
	return (
		<>
			<div className='subheading'>
				<div className='code'>
					<p className='subheading'>
						C&#58;&#92;Users&#92;developer&gt;&nbsp;
					</p>
					<p className='command'>{commandString}</p>
					<p className='caret'>&#9474;</p>
				</div>
			</div>
		</>
	);
}
