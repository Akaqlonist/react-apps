import React, { useContext } from 'react';
import { ContactContext, ContactContextType } from '../../../context/contact/contact';
import { validEmail } from '../../../utils/validate';
import './SnapInput.css';

interface SpanInputProps {
	title: string;
	defaultContent: string;
}

const SpanInput: React.FC<SpanInputProps> = ({ title, defaultContent }) => {
	const [clicked, setClicked] = React.useState<boolean>(false);
	const [content, setContent] = React.useState<string>(defaultContent);
	const { currentIndex, updateContact } = useContext(ContactContext) as ContactContextType;

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setContent(e.currentTarget.value);
	};

	const isValid = (): boolean => {
		const validator = {
			Email: validEmail.test(content),
			Phone: content.match(/^[0-9]+$/) != null,
			Name: content.length > 0,
		};
		type ObjectKey = keyof typeof validator;
		return validator[title as ObjectKey];
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			if (isValid()) {
				updateContact(currentIndex, title.toLowerCase(), content);
				setClicked(false);
				e.preventDefault();
			}
		} else if (e.key === 'Escape') {
			onBlur(e);
		}
	};

	const handleClick = (e: React.SyntheticEvent) => {
		if (clicked === false) {
			setTimeout(() => {
				setClicked(true);
			}, 50);
		}
		e.preventDefault();
	};

	const onBlur = (e: React.SyntheticEvent) => {
		if (isValid()) {
			updateContact(currentIndex, title.toLowerCase(), content);
		} else {
			setContent(defaultContent);
		}
		setClicked(false);
	};

	return (
		<div className="SnapInput" onClick={handleClick} data-value={content}>
			{title !== 'Name' && <span>{title}: </span>}
			{clicked ? (
				<>
					<input
						autoFocus
						type={'email'}
						value={content}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						onBlur={onBlur}
						className={title}
					/>
					<span className="validation">{isValid() ? '✅' : '⛔️'}</span>
				</>
			) : (
				<span className={title}>{content}</span>
			)}
		</div>
	);
};

export default SpanInput;
