import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import {
	WeatherContext,
	WeatherContextType,
} from 'context/WeatherContext/weatherContext';
import React from 'react';
import { useForm } from 'react-hook-form';

interface InputCardProps {}

type FormData = {
	city: string;
};

const InputCard: React.FC<InputCardProps> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ defaultValues: { city: '' } });

	const { updateCity } = React.useContext(WeatherContext) as WeatherContextType;

	const onSubmit = handleSubmit(({ city }: FormData) => {
		updateCity(city);
	});

	return (
		<>
			<form onSubmit={onSubmit}>
				<FormControl
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'center'}
					alignItems={'center'}
					isInvalid={errors.city?.message ? true : false}
				>
					<FormLabel>City</FormLabel>
					<Input
						id='city'
						{...register('city', {
							required: true,
							minLength: { value: 3, message: 'min is 3' },
						})}
					/>
					<FormErrorMessage style={{ marginTop: 30 }}>
						{errors.city && errors.city.message}
					</FormErrorMessage>
				</FormControl>
				<Button type='submit'>Submit</Button>
			</form>
		</>
	);
};
export default InputCard;
