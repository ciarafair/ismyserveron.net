import { useState, useEffect } from 'react';
import axios from 'axios';
import EmptyChart from './emptyChart';

const pingURL = 'https://backend2.ismyserveron.net/api';

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: {
    value: number;
  }[];
  label?: string;
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

  const [serverUrl, setServerUrl] = useState<string>(() => {
    const storedUrl = localStorage.getItem('serverUrl');
    return storedUrl || '';
  });

  const [serverStatus, setServerStatus] = useState<string>('running');

  useEffect(() => {
    const interval = setInterval(() => {
      const getRequest = () => {
        axios
          .get(pingURL)
          .then((response) => {
            const pingValue = response.data.pingTimes;
            const newServerUrl = pingURL;
            setServerUrl(newServerUrl);
            setServerStatus('running');
            localStorage.setItem('serverUrl', newServerUrl);

            const newDataPoint = {
              Time: new Date().toLocaleTimeString(),
              Ping: pingValue,
            };

            setData((prevData) => {
              const updatedData =
                prevData.length >= 10
                  ? [...prevData.slice(1), newDataPoint]
                  : [...prevData, newDataPoint];
              localStorage.setItem('chartData', JSON.stringify(updatedData));
              return updatedData;
            });
          })
          .catch((error) => {
						console.error(error);

						// Create an error datapoint
						const errorDataPoint = {
							Time: new Date().toLocaleTimeString(),
							Ping: -1, // Use a negative value or some other indicator for errors
						};
            setServerStatus('down');


						setData((prevData) => {
							const updatedData =
								prevData.length >= 10
									? [...prevData.slice(1), errorDataPoint]
									: [...prevData, errorDataPoint];
							localStorage.setItem('chartData', JSON.stringify(updatedData));
							return updatedData;
						});
					});
				};
      getRequest();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav>
        <h1>
          {serverUrl} is {serverStatus === 'running' ? 'running' : 'down'} as of {new Date().toLocaleTimeString()}
        </h1>
      </nav>
      <EmptyChart data={data} CustomTooltip={CustomTooltip} />
    </>
  );
};

export default ActiveChart;
