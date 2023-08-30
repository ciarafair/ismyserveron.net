import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

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
	const [data, setData] = useState<DataPoint[]>(() => {
		const storedData = localStorage.getItem('chartData');
		return storedData ? JSON.parse(storedData) : [];
	});

	useEffect(() => {
		const startTimestamp = Date.now();
		const interval = setInterval(() => {
			axios
				.get('https://backend2.ismyserveron.net/api')
				.then((response) => {
					const endTimestamp = Date.now();
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
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='DynamicChart'>
			<AreaChart
				width={1500}
				height={800}
				data={data}
				syncId="anyId"
				margin={{
				top: 10,
				right: 30,
				left: 0,
				bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="Time" />
				<YAxis />
				<Tooltip />
				<Area type="monotone" dataKey="Ping" stroke="#82ca9d" fill="#82ca9d" />
			</AreaChart>
		</section>
	);
}

export default DynamicLineChart;
