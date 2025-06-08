import React from "react"

export default function General(): React.ReactElement {
	return (
		<div className='scroll'>
			<div className='text-block'>
				<p className='about-heading'>
					Introduction
				</p>

				<p className='about-subheading'>
					This is just some general information about me.
				</p>

				<p className="about-paragraph">
					In my free time I like configuring personal Linux systems, specifically Arch or Debian to have
					aesthetically pleasing UI and controls using window managers such as &apos;i3wm&apos; or &apos;bspwm&apos; and custom
					terminal emulators like &apos;urxvt&apos; and &apos;coolretroterm&apos;.
				</p>

				<p className="about-paragraph no-before">
					When I&apos;m not prgramming or tinkering with a computer I enjoy playing with my two cats, listening to music or watching long
					YouTube documentaries and horror movies.
				</p>
				<p className="about-paragraph no-before">
					I&apos;m looking to get my start in the IT industry, as a full time job and as a passion. Because of my history with computers
					throughout my childhood it would be the perfect career. This website itself is a passion project, I&apos;ve spent a large amount
					of my free time on it and have enjoyed it thoroughly.
				</p>
			</div>
		</div >
	)
}
