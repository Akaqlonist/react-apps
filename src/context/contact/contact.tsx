import React from 'react';
import useLocalStorage from 'use-local-storage';

export type Contact = {
	name: string;
	email: string;
	phone: string;
};

export type ContactContextType = {
	contacts: Contact[];
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
	setContacts: (contact: Contact[]) => void;
	addContact: (contact: Contact) => boolean;
	deleteContact: (index: number) => void;
	updateContact: (index: number, arg2: Contact | string, arg3?: string) => void;
};

export const ContactContext = React.createContext<ContactContextType | null>(null);

const defaultContacts = [
	{ name: 'Jason', email: 'jason.hong.sg@gmail.com', phone: '12345656' },
	{ name: 'Aka', email: 'akaqlonist@gmail.com', phone: '32143253' },
	{ name: 'Barney', email: 'barney.xu.biz@gmail.com', phone: '5346234' },
];

const ContactProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [currentIndex, setCurrentIndex] = React.useState(-1);
	const [contacts, setContacts] = useLocalStorage<Contact[]>('Contacts', defaultContacts);

	const addContact = (contact: Contact): boolean => {
		if (contacts.find((_contact) => _contact.email === contact.email)) return false;
		setContacts([...contacts, contact]);
		return true;
	};

	React.useEffect(() => {
		setContacts(defaultContacts);
	}, []);

	const updateContact = (index: number, arg2: Contact | string, arg3?: string): void => {
		let newContacts = [...contacts];
		if (typeof arg2 === 'object') newContacts[index] = arg2;
		if (typeof arg2 === 'string' && arg3) {
			Object.assign(newContacts[index]);
			const newContact = {
				...newContacts[index],
				[arg2]: arg3,
			} as Contact;
			newContacts[index] = newContact;
		}
		setContacts(newContacts);
	};

	const deleteContact = (index: number): void => {
		console.log(index);
		let newContacts = contacts;
		newContacts.splice(index, 1);
		setContacts(contacts);
	};

	React.useEffect(() => {
		console.log(contacts);
	}, [contacts]);

	return (
		<ContactContext.Provider
			value={{
				contacts,
				currentIndex,
				updateContact,
				setCurrentIndex,
				setContacts,
				addContact,
				deleteContact,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

export default ContactProvider;
