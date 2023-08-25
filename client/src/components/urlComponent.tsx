import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { DateTime } from 'luxon';

const GetUrl: React.FC = () => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handlePut = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		console.log('[Ping] Sending PUT to /url');
		axios({
			method: 'get',
			url: 'http://localhost:6868/url',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			},
			data: {
				url: String(inputValue),
				timestamp: DateTime.now().toISO(),
			},
			timeout: 10000,
		}).then((res: AxiosResponse<any>) => {
				console.log('[Pong] ' + res);
		}).catch((error: any) => {
				console.error(error);
				console.log('[Pong] ' + error.message);
		});
	};

	return (
		<form onSubmit={handlePut}>
			<label>
				Input:
				<input type="text" name="Insert URL here." value={inputValue} onChange={handleChange} />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default GetUrl;
