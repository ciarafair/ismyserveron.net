import React from 'react';
import {
	Area,
	CartesianGrid,
	ComposedChart,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';

interface ChartProps {
  data: any[];
  CustomTooltip: React.FC;
}

const EmptyChart: React.FC<ChartProps> = ({ data, CustomTooltip }) => {
	return (
		<>
			<section className='DynamicChart'>
				<ComposedChart
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
					<CartesianGrid
						strokeDasharray="3 3"
					/>
					<XAxis
						dataKey="Time"
						label={{
							value: "Time",
							position: "insideBottom",
							textAnchor: "middle"
						}}
					/>
					<YAxis
						label={{
							value: "Ping (ms)",
							angle: -90,
							position: "insideLeft",
							textAnchor: "middle"
						}}
					/>
					<Tooltip
						content={<CustomTooltip />}
					/>
					<Area
						type="monotone"
						dataKey="Ping"
						fill="#82ca9d"
					/>
				</ComposedChart>
			</section>
		</>
	);
};

export default EmptyChart;
