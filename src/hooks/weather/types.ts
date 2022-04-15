export type WeatherResponse = {
	general: string;
	icon: string;
	temp: number;
	wind: number;
};

export type WeatherRequest = {
	city: string;
	key: string;
};
