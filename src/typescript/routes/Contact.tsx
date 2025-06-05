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
		}
	}, [data]);

	const onSubmit = async (event: any) => {
		event.preventDefault();
		showPopup()
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
			<p className='general-text'>
				Send me an email!
			</p>
			<div className='column form-container'>
				<input type='text' name='name' placeholder='Name' className='contact-input link list2 highlight' autoComplete='false' required />
				<input type='text' name='email' placeholder='E-mail' className='contact-input link list2 highlight' autoComplete='false' required />
				<textarea name='message' placeholder='Message' className='contact-input message link list2 highlight' autoComplete='false' required />
				<button type='submit' className='submit link list2 highlight'>Submit</button>
			</div>
		</form >
	)
}

function showPopup() {
	console.log(`Enabling popup.`)
	const element: Element = document.querySelector('.popup');
	const inputList = document.getElementsByTagName('input');
	const textareaList = document.getElementsByTagName('textarea');

	if (element == null) {
		console.log(`Popup element was null.`)
		return
	}

	if (output == null) {
		console.log(`Popup output was null.`)
		return
	}

	for (let ii = 0; ii < inputList.length; ii++) {
		if (inputList[ii].type == "text") {
			inputList[ii].value = "";
		}
	}
	for (let ii = 0; ii < textareaList.length; ii++) {
		if (textareaList[ii].type == "text") {
			textareaList[ii].value = "";
		}
	}
	output = null
	element.classList.remove('hidden')
}

/*function showPopupDev() {
	const inputs: Element = document.querySelector('.popup');

	inputs.classList.remove('hidden')
}*/

function hidePopup() {
	console.log(`Disabling popup.`)
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
		applyTextBorder('#contactTwo', '#D4D4D4', '┌─┐│ │└─┘')
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
					<div className='popup-container'>
						<div className='popup column hidden'>
							<div className='popup-shadow' />
							<div className='popup-box' />
							<div className='popup-text-container'>
								<p className='popup-text'>{formOutput}</p>
								<button className='popup-button link highlight' onClick={hidePopup}>[Enter] to continue or [escape] to cancel</button>
							</div>
						</div>
					</div>
				</section>
			</main >

			<Copyright />
			<div className='crt' />
		</>
	)
}

export default Contact
