import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import {
	WeatherContext,
	WeatherContextType,
} from 'context/WeatherContext/weatherContext';
import useWeather from 'hooks/weather/useWeather';

interface WeatherCardProps {}

const WeatherCard: React.FC<WeatherCardProps> = () => {
	const { city } = React.useContext(WeatherContext) as WeatherContextType;
	const { fetch, parsePath, response, error, loading } = useWeather();

	React.useEffect(() => {
		fetch(city);
		console.log(response);
	}, [city]);

	return (
		<Box maxW={'sm'} borderWidth='1px' borderRadius='lg' >
			<Image src={parsePath(response?.icon)} alt='awfasef' />
			<Box padding='6'>{city}</Box>
			<Box padding='6'>{response?.temp}</Box>
			<Box padding='6'>{response?.wind}</Box>
		</Box>
	);
};
export default WeatherCard;
