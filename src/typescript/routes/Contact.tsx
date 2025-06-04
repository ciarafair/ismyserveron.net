/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'

//TODO: Set up system to ensure that the email is indeed an email
// TODO: Set up aesthetic interface so that the contact form is a popup, and the background text is maybe an animation of a console being used
//! FIX LIVE VERSIONS ACCESS KEY

function Contact(this: any): React.ReactElement {
	const [result, setResult] = React.useState("");
	const onSubmit = async (event: any) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		let apiKey = '7f128a9c-b66f-435f-9e52-4211cf3176dc'
		formData.append("access_key", apiKey);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	const applyBorders = () => {
		applyTextBorder('#one', '#D4D4D4', '╔═╗║ ║╚═╝')
	}

	useEffect(() => {
		document.addEventListener('load', this, true); {
			emitter.emit('routeLoaded', 'Home.tsx')
			applyBorders()
		}
	}, []);

	return (
		<>
			<Background />
			<main className='row adjustable'>
				<Sidebar />
				<section className='column'>
					<div id='one' className='box default'>
						<form action='' onSubmit={onSubmit}>
							<p id='intro'>
								Get in touch
							</p>
							<div className='column'>
								<input type='text' name='name' placeholder='Name' className='contact-input' required />
								<input type='text' name='email' placeholder='E-mail' className='contact-input' required />
								<textarea name='message' placeholder='Type your message here.' className='contact-input' required />
								<button>Submit</button>
							</div>
						</form>
						<span>{result}</span>
					</div>
				</section>
			</main >
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default Contact
