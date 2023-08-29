import axios from 'axios';

const GetTestSec: React.FC = () => {
	const handlePing = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		console.log('[Ping] Sending GET to /test');
		axios.get('https://backend2.ismyserveron.net/api/test')
		.then(response => {
			console.log('[Pong] ' + response.data);
		})
		.catch(error => {
			console.error(error);
		});
	};

	return (
		<button onClick={handlePing} className='GetRequest'>
			<input type="submit" value="Get" />
		</button>
	)
}

export { GetTestSec };
