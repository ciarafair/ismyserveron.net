import React from "react"

export default function General(): React.ReactElement {
	return (
		<div className='scroll'>
			<div className='text-block'>
				<p className='about-heading'>
					Introduction
				</p>

				<p className='about-subheading'>
					Hi there, my name is Ciaran&#59;
				</p>

				<p className="about-paragraph">
					I am currently studying for the Cisco Certified Network Professional certification and in
					my free time enjoy completing Hack The Box challenges. I work as a cashier at Grill&apos;d Kenmore. I have a deep interest
					in computers and programming! I&apos;m hoping to get into a technology or technology adjacent field and am specifically
					looking for a full-time job which will fund my studies.
				</p>
				<p className="about-paragraph no-before">
					In my free time I like configuring personal Linux systems, specifically Arch or Debian to have
					aesthetically pleasing UI and controls using window managers such as &apos;i3wm&apos; or &apos;bspwm&apos; and custom
					terminal emulators like &apos;urxvt&apos; and &apos;coolretroterm&apos;. When I&apos;m not prgramming or tinkering with
					a computer I enjoy playing with my two cats, listening to music or watching long YouTube documentaries and horror movies.
				</p>
				<p className="about-paragraph no-before">
					I&apos;m looking to get my start in the IT industry, as a full time job and as a passion. Because of my history with computers
					throughout my childhood it would be the perfect career. This website itself is a passion project, I&apos;ve spent a large amount
					of my free time on it and have enjoyed it thoroughly.
				</p>

				<p className="about-paragraph no-before">
					I have also completed a certificate IV in Cybersecurity and have experience using multiple cloud-based
					infrastructure platforms such as Cloudflare, Microsoft Azure and Amazon Web Service. Throughout the
					training in the certificate IV in Cybersecurity we covered incident response plans, exposing website
					vulnerabilities, automation and script writing, basic data analysis and the application of cybersecurity in
					compliance with privacy legislation.
				</p>

			</div>
		</div >
	)
}
