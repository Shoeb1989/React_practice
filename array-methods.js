const product = [
    {name: 'laptop', price: 84000, Brand:'hp'},
    {name: 'mobile', price: 24000, Brand:'asus'},
    {name: 'bike', price: 224000, Brand:'honda'},
    {name: 'watch', price: 840, Brand:'apple'}
];

const brands = product.map(product => product.Brand);
console.log(brands);
const Prices = product.map(product => product.price);
console.log(Prices);

product.forEach(product => console.log(product));
product.forEach(product => console.log(product.price));

// filter

const cheap = product.filter(product => product.price <=30000);
console.log(cheap);

//find

const special = product.find(product => product.name.includes('l'));
console.log(special);
