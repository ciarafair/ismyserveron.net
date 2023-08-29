import axios from 'axios';

const GetTestSec: React.FC = () => {
	const handlePing = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		console.log('[Ping] Sending GET to /api');
		axios.get('https://backend2.ismyserveron.net/api')
		.then(response => {
			console.log('[Pong] ' + response.data);
		})
		.catch(error => {
			console.error(error);
		});
	};

	return (
		<button onClick={handlePing} className='GetRequest'>
			<input type="submit" value="Ping via GET" />
		</button>
	)
}

export { GetTestSec };
