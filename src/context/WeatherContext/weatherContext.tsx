import * as React from 'react';

export type WeatherContextType = {
	city: string;
	updateCity: (_city: string) => void;
};

export const WeatherContext = React.createContext<WeatherContextType | null>(
	null
);

const WeatherProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [city, setCity] = React.useState<string>('London');

	const updateCity = (_city: string) => {
		setCity(_city);
	};

	return (
		<WeatherContext.Provider value={{ city, updateCity }}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherProvider;
