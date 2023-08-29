import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const ZERO = 0;
const EIGHT = 8;
const ONE = 1;

interface DataPoint {
	Time: string;
	Ping: number;
}

function randomInteger(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + ONE)) + min;
}

function DynamicLineChart(): JSX.Element {
	const [data, setData] = useState<DataPoint[]>([]);

	useEffect(() => {
		const interval = setInterval(() => {
			axios
				.get('https://backend2.ismyserveron.net/api')
				.then((response) => {
					const milliseconds = new Date().getMilliseconds().
						toString().
						slice(ZERO, EIGHT);
					const seconds = new Date().getSeconds().
						toString().
						slice(ZERO, EIGHT);
					const minutes = new Date().getMinutes().
						toString().
						slice(ZERO, EIGHT);
					const hours = new Date().getHours().
						toString().
						slice(ZERO, EIGHT);
					const currentTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
					const pingValue = randomInteger(0, 100);

					setData((prevData) => {
						if (prevData.length >= 10) {
							return [
								...prevData.slice(1), // Remove the oldest data point
								{
									Time: new Date().toLocaleTimeString(),
									Ping: pingValue,
								},
							];
						} else {
							return [
								...prevData,
								{
									Time: new Date().toLocaleTimeString(),
									Ping: pingValue,
								},
							];
						}
					});
				})
				.catch((error) => {
					console.error(error);
				});
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='DynamicChart'>
			<LineChart width={1500} height={800} data={data}>
				<Line type='monotone' isAnimationActive={false} dataKey='Ping' stroke='#8884d8' />
				<CartesianGrid stroke='#ccc' />
				<XAxis dataKey='Time' />
				<YAxis />
				<Tooltip />
			</LineChart>
		</section>
	);
}

export default DynamicLineChart;
