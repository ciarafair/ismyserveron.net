import { useState, useEffect } from 'react';
import axios from 'axios';
import EmptyChart from './chartComponent';

const CustomTooltip = ({
	active,
	payload,
	label,
}: {
	active?: boolean,
	payload?: {
		value: number
	}[],
	label?: string,
}): JSX.Element | null => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`Time: ${label}`}</p>
				<p className="value">{`Ping: ${payload[0].value}`}</p>
			</div>
		);
	}

	return null;
};

interface DataPoint {
	Time: string;
	Ping: number;
}

const ActiveChart = () => {

	const [data, setData] = useState<DataPoint[]>(() => {
		const storedData = localStorage.getItem('chartData');
		return storedData ? JSON.parse(storedData) : [];
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const getRequest = () => {
				axios
					.get('https://backend2.ismyserveron.net/api')
					.then((response) => {
						const pingValue = response.data.pingTimes

						const newDataPoint = {
							Time: new Date().toLocaleTimeString(),
							Ping: pingValue,
						};

						setData((prevData) => {
							const updatedData = prevData.length >= 10 ? [...prevData.slice(1), newDataPoint] : [...prevData, newDataPoint];
							localStorage.setItem('chartData', JSON.stringify(updatedData));
							return updatedData;
						});
					})
					.catch((error) => {
						console.error(error);
					});
			}
			getRequest();
		}, 2000);

		return () => clearInterval(interval);

	}, []);

	return (
		<>
			<EmptyChart data={data} CustomTooltip={CustomTooltip} />
		</>
	)
}

export default ActiveChart
