type a = {
	a: string;
};
type b = {
	b: string;
};
type c = a | b;

const v: a = { a: 'efe' };
console.log(v);

export {};
