import React, { useContext } from 'react';
import { ContactContext, ContactContextType } from '../../context/contact/contact';
import './ContactForm.css';

const ContactForm: React.FC = () => {
	const { addContact } = useContext(ContactContext) as ContactContextType;

	const [name, setName] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [phone, setPhone] = React.useState<string>('');
	const [conflict, setConflict] = React.useState<boolean>(false);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (addContact({ name, email, phone })) setConflict(false);
		else setConflict(true);
	};

	return (
		<form className="ContactForm Box" onSubmit={handleSubmit}>
			<label>
				<span>Name: </span>
				<input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
			</label>

			<label>
				<span>Email: </span>
				<input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>

			<label>
				<span>Phone: </span>
				<input type="tel" name="phone" id="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
			</label>

			<input type="submit" value={'Submit'} />
			{conflict && <span>Same email already registered</span>}
		</form>
	);
};
export default ContactForm;
