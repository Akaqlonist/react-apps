import React from 'react';
import './App.css';
import ContactList from './component/ContactList/ContactList';
import ContactForm from './component/Form/ContactForm';
import ContactProvider from './context/contact/contact';

function App() {
	return (
		<div className="App">
			<ContactProvider>
				<ContactForm />
				<ContactList />
			</ContactProvider>
		</div>
	);
}

export default App;
