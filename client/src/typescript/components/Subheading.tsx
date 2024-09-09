import React from 'react'

function Subheading({
	commandString,
}: {
	commandString: string
}): React.ReactElement {
	return (
		<>
			<div className="code">
				<p className="prompt">
					dev&#64;website&#58;&#47;homepage&#36;&#160;
				</p>
				<p className="command">{commandString}</p>
				<p className="caret">&#9474;</p>
			</div>
		</>
	)
}

export default Subheading
