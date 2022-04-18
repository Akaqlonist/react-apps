import React from 'react';
import logo from './logo.svg';
import './App.css';

type Person = {
	name: string;
	age: number;
	children?: Person[];
};
interface DataListProps {
	lists: Person[];
}

const DataList: React.FC<DataListProps> = ({ lists }) => {
	const renderItem = (item: Person) => {
		return (
			<li>
				{`name: ${item.name} age: ${item.age}`}
				{item.children && renderListItems(item.children)}
			</li>
		);
	};

	const renderListItems = (lists: Person[]) => {
		return (
			<ul>
				{lists.map((listItem, index) => {
					return renderItem(listItem);
				})}
			</ul>
		);
	};
	return <>{renderListItems(lists)}</>;
};

const data = [
	{
		name: 'Daniel',
		age: 40,
		children: [
			{
				name: 'Hunter',
				age: 21,
				children: [
					{ name: 'Becky', age: 2 },
					{ name: 'Sarah', age: 2, children: [{ name: 'Chidren', age: 13 }] },
					{ name: 'Wendy', age: 2 },
				],
			},
		],
	},

	{ name: 'John', age: 24 },

	{
		name: 'Jen',
		age: 31,
		children: [{ name: 'Baliey', age: 5 }],
	},
];

function App() {
	return <DataList lists={data} />;
}

export default App;
