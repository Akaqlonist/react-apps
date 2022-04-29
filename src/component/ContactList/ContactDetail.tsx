import React from 'react';
import { Contact } from '../../types/contact';
import './ContactDetail.css';
import SpanInput from './SpanInput/SpanInput';

interface ContactDetailProps {
	detail: Contact;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ detail }) => {
	return (
		<div className="ContactDetail Box">
			<span className="tail" />
			<SpanInput title="Name" defaultContent={detail.name} />
			<SpanInput title="Email" defaultContent={detail.email} />
			<SpanInput title="Phone" defaultContent={detail.phone} />
		</div>
	);
};

export default ContactDetail;
