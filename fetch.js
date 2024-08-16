const student = {
    name:'shoeb',
    age:26,
    movies:['gorila', 'yoyo']
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentobj = JSON.parse(studentJSON);
console.log(studentobj);


// fetch

fetch('url')
.then(res  => res.json())
.then(data => console.log(data))
// keys, values

const keys = Object.keys(student);
const values = Object.values(student);

// for 

const numbers = [23, 45, 58,];
numbers.forEach(num => console.log(num));
numbers.map( num => num *2);

// for of on array like Object 
// loop on an object  for in on object 


const product = [
    {name: 'laptop', price: 84000, Brand:'hp'},
    {name: 'mobile', price: 24000, Brand:'asus'},
    {name: 'bike', price: 224000, Brand:'honda'},
    {name: 'watch', price: 840, Brand:'apple'}
];

const newProduct = {name: 'webcam',price:700, brand:'lal'};

const newProducts = [...product, newProduct];

// remove phobe means create a new array without phone
// create a new array without specific item

const remaining = product.filter(product => product.name !== 'phone')