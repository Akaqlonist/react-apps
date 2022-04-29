import React from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import ReactTooltip from 'react-tooltip';
import { ContactContext, ContactContextType } from '../../context/contact/contact';
import ContactDetail from './ContactDetail';
import './ContactList.css';

interface ContactListProps {}

const ContactList: React.FC<ContactListProps> = () => {
	const { contacts, currentIndex, setCurrentIndex, deleteContact } = React.useContext(
		ContactContext
	) as ContactContextType;
	const ref = useDetectClickOutside({
		onTriggered: (e: Event) => {
			setCurrentIndex(-1);
		},
		disableKeys: true,
	});

	const handleDelete = (index: number) => {
		deleteContact(index);
	};

	React.useEffect(() => {
		ReactTooltip.rebuild();
	}, []);

	return (
		<ul className="Box ContactList" ref={ref}>
			{contacts.map((contact, index) => (
				<li
					key={`contact-list-key-${index}`}
					className={index === currentIndex ? 'active' : ''}
					onClick={(e: React.SyntheticEvent) => {
						setCurrentIndex(index);
					}}
				>
					{contact.name}
					<button className="delete" onClick={() => handleDelete(index)}>
						❌
					</button>
					{index === currentIndex && <ContactDetail detail={contacts[index]} />}
				</li>
			))}
		</ul>
	);
};

export default ContactList;
