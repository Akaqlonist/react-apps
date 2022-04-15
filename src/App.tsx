import { Flex } from '@chakra-ui/react';
import InputCard from 'components/InputCard/InputCard';
import WeatherCard from 'components/WeatherCard/WeatherCard';
import WeatherProvider, {
	WeatherContextType,
} from 'context/WeatherContext/weatherContext';

function App() {
	return (
		<Flex
			padding={100}
			gap={10}
			direction={'column'}
			align='center'
			height={'100vh'}
		>
			<WeatherProvider>
				<InputCard />
				<WeatherCard />
			</WeatherProvider>
		</Flex>
	);
}

export default App;
