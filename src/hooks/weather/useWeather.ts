import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { WeatherRequest, WeatherResponse } from './types';

const weatherApi = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5',
});

const API_KEY = 'fd3cb49b0ea45a2db7ef820b22c94754';

const useWeather = () => {
	const [response, setResponse] = React.useState<WeatherResponse | null>(null);
	const [error, setError] = React.useState<Error | null>(null);
	const [loading, setLoading] = React.useState<Boolean>(false);

	const fetch = React.useCallback(async (_city: string) => {
		setLoading(true);
		weatherApi
			.get('/weather', {
				params: { q: _city, appid: API_KEY },
			} as AxiosRequestConfig<WeatherRequest>)
			.then((res) => {
				const typedRes: WeatherResponse = {
					general: res.data.weather[0].main,
					icon: res.data.weather[0].icon,
					temp: res.data.main.temp,
					wind: res.data.wind.speed,
				};
				setResponse(typedRes);
			})
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, []);

	const parsePath = (_str: string | undefined) => {
		console.log(_str);
		return `http://openweathermap.org/img/wn/${_str}@2x.png?appid=${API_KEY}`;
	};

	return { fetch, parsePath, response, error, loading };
};

export default useWeather;
