import React, { useState, useEffect } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

type ChartData = {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		borderColor: string;
		tension: number;
	}[];
};


function DynamicLineChart(): JSX.Element {

	const [data, setData] = useState<ChartData>({
		labels: [],
		datasets: [
			{
				label: 'Milliseconds',
				data: [], // Initial empty data array
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
			},
		],
	});

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: false,
			},
		},
	};

	const getRandomNumber = (min: number, max: number) => {
		return Math.random() * (max - min) + min;
	};

	const handlePing = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		axios.get('https://backend2.ismyserveron.net/api/test')
			.then(response => {
				console.log('[Pong] ' + response.data);
			})
			.catch(error => {
				console.error(error);
			});
	};
	useEffect(() => {

		const fetchData = async () => {
			try {
				console.log('[Ping] Sending GET to /api');
				const response = await axios.get('https://backend2.ismyserveron.net/api');
				console.log('[Pong] ' + response.data);

				const dataArray = Object.values(response.data);
				const chartData: ChartData = {
					labels: dataArray.map((item: any) => item.timestamp),
					datasets: [
						{
							label: 'Milliseconds',
							data: dataArray.map((item: any) => item.ms),
							fill: false,
							borderColor: 'rgb(75, 192, 192)',
							tension: 0.1,
						},
					],
				};

				setData(chartData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		const interval = setInterval(fetchData, 5000);
		return () => clearInterval(interval);

	}, []);

	Chart.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	return (
		<section className='DynamicChart'>
			<Line options={options} data={data} />
		</section>
	);
}

export default DynamicLineChart;
