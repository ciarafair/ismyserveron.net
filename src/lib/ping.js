const statusElement = document.getElementById("status");

// eslint-disable-next-line func-style, space-before-function-paren
async function fetchServerStatus() {

	try {

		const response = await fetch("/check-status");
		const data = await response.json();
		statusElement.textContent = data.status;

	} catch (error) {

		console.error(error);
		statusElement.textContent = "error";

	}

}

fetchServerStatus();