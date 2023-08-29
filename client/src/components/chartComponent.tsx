import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface DataPoint {
  Time: string;
  Ping: number;
}

function DynamicLineChart(): JSX.Element {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get('https://backend2.ismyserveron.net/api')
        .then((response) => {
			const currentTime = new Date().getTime().valueOf();
			const pingValue = parseInt(response.data);

          setData((prevData) => [
            ...prevData,
            {
              Time: new Date(currentTime).toLocaleTimeString(),
              Ping: pingValue,
            },
          ]);
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
        <Line type='monotone' dataKey='Ping' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='Time' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </section>
  );
}

export default DynamicLineChart;
