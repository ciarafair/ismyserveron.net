/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'
import Copyright from '../components/Copyright.tsx'

//TODO: Set up aesthetic interface so that the contact form is a popup, and the background text is maybe an animation of a console being used

let output: string = null

function Form({ setOutput }: { setOutput: (value: string) => void }): React.ReactElement {
	const apiKey = '7f128a9c-b66f-435f-9e52-4211cf3176dc'
	const [data, setData] = React.useState(null);

	useEffect(() => {
		if (data !== null) {
			console.log("Output updated:", data);
			setOutput(data);
			output = data
			showPopup()
		}
	}, [data]);

	const onSubmit = async (event: any) => {
		event.preventDefault();
		setData("Sending....");

		const formData = new FormData(event.target);
		formData.append("access_key", apiKey);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: json
			});

			const result = await response.json();
			console.log(result.message);
			setData(result.message.toString());
		} catch (error) {
			console.log(error);
			setData(`There has been an error. ${error}`);
		}
	};

	return (
		<form action='' onSubmit={onSubmit}>
			<p id='intro'>
				Get in touch
			</p>
			<div className='column'>
				<input type='text' name='name' placeholder='Name' className='contact-input' autoComplete='false' required />
				<input type='text' name='email' placeholder='E-mail' className='contact-input' autoComplete='false' required />
				<input name='message' placeholder='Type your message here.' className='contact-input' autoComplete='false' required />
				<button>Submit</button>
			</div>
		</form>
	)
}

function showPopup() {
	const element: Element = document.querySelector('.popup');
	const elementList = document.getElementsByTagName('input');

	if (element == null) { return }

	if (output == null) { return }

	for (var ii = 0; ii < elementList.length; ii++) {
		if (elementList[ii].type == "text") {
			elementList[ii].value = "";
		}
	}
	output = null
	element.classList.remove('hidden')
}

function hidePopup() {
	const element: Element = document.querySelector('.popup');
	if (element == null) {
		return
	}
	element.classList.add('hidden')
}

function Contact(this: any): React.ReactElement {
	const [formOutput, setFormOutput] = React.useState<string | null>(null);
	const applyBorders = () => {
		applyTextBorder('#contactOne', '#D4D4D4', '╔═╗║ ║╚═╝')
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
					<div id='contactOne' className='box default'>
						<Form setOutput={setFormOutput} />
					</div>
					<div className='popup hidden'>
						<p>Popup</p>
						<p>Output: {formOutput}</p>
						<button onClick={hidePopup}>Close</button>
					</div>
				</section>
			</main >

			<Copyright />
			<div className='crt' />
		</>
	)
}

export default Contact
