import axios from 'axios';

const PostTestFunc: React.FC = () => {
	const handlePing = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		console.log('[Ping] Sending POST to /test');
		axios.post('http://nginx.ismyserveron.net/test')
		.then(response => {
			console.log('[Pong]' + response.data);
		})
		.catch(error => {
			console.error(error);
		});
	};

	return (
		<button onClick={handlePing}>
			<input type="submit" value="Post" />
		</button>
	)
}

const GetTestFunc: React.FC = () => {
	const handlePing = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		console.log('[Ping] Sending GET to /test');
		axios.get('http://nginx.ismyserveron.net/test')
		.then(response => {
			console.log('[Pong] ' + response.data);
		})
		.catch(error => {
			console.error(error);
		});
	};
	return (
		<button onClick={handlePing}>
				<input type="submit" value="Get" />
		</button>
	)
}

const PutTestFunc: React.FC = () => {
	const handlePing = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		console.log('[Ping] Sending PUT to /test');
		axios.put('http://nginx.ismyserveron.net/test')
		.then(response => {
			console.log('[Pong] ' + response.data);
		})
		.catch(error => {
			console.error(error);
		});
	};
	return (
		<button onClick={handlePing}>
				<input type="submit" value="Put" />
		</button>
	)
}

const DeleteTestFunc: React.FC = () => {
	const handlePing = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		console.log('[Ping] Sending DELETE ping to /test');
		axios.delete('http://nginx.ismyserveron.net/test')
		.then(response => {
			console.log('[Ping] ' + response.data);
		})
		.catch(error => {
			console.error(error);
		});
	};
	return (
		<button onClick={handlePing}>
				<input type="submit" value="Delete" />
		</button>
	)
}

export { PostTestFunc, GetTestFunc, PutTestFunc, DeleteTestFunc };
