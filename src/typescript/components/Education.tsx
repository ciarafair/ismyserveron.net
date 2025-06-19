import React from "react"
import Decor from "./Decor";

export default function Education(): React.ReactElement {
	return (
		<>
			<div className='scroll'>
				<div className='text-block'>
					<div className="row">
						<Decor />
						<div className="column">
							<p className='about-heading'>
								Certificate IV in Cybersecurity via TAFE Southbank, QLD.
							</p>
							<p className='about-subheading'>
								February 2024 &ndash; April 2025
							</p>
							<p className='about-paragraph'>
								This certificate covered a range of technical fundamental skills including how to implement network security
								infrastructure and detect breaches in network security, as well as essential soft skills such as stakeholder
								interactions and problem solving. I completed the course and every elective subject, the units being including
								basic data analysis, automation of processes, exposing website vulnerabilities and the implementation of network
								security infrastructure in an organisation.
							</p>
						</div>
					</div>
					<div className="row">
						<Decor />
						<div className="column">
							<p className='about-heading'>
								Certificate III in Hospitality via Sarina Russo Schools.
							</p>
							<p className='about-subheading'>
								October 2022 &ndash; September 2023
							</p>
							<p className='about-paragraph'>
								This certificate includes my responsible service of alcohol &#40;RSA&#41; training,
								it assessments on general hospitality service, working with other staff, hygenic practices as well as
								cleaning surfaces and preperation of food.
							</p>
						</div>
					</div>
					<div className="row">
						<Decor />
						<div className="column">
							<p className='about-heading'>
								Certificate II in Skills for Work & Vocational Pathways via NLSC, QLD.
							</p>
							<p className='about-subheading'>
								October 2022 &ndash; September 2023
							</p>
							<p className='about-paragraph'>
								The training for the certificate II in skills for work & vocational pathways focused on general workplace experiences,
								such as workplace health and safety as well as entry level digital literacy and employability skills.
							</p>
						</div>
					</div>
					<div className="row">
						<Decor />
						<div className="column paragraph">
							<p className='about-heading'>
								Queensland Certificate of Education via NLSC, QLD.
							</p>
							<p className='about-subheading'>
								May 2016 &ndash; November 2023
							</p>
							<p className='about-paragraph'>
								I completed senior secondary schooling at North Lakes State College and was awarded the Queensland Certificate of Education &#40;QCE&#41; is Queensland&apos;s senior secondary schooling qualification. It is internationally recognised and provides evidence of senior schooling achievements.
							</p>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}
