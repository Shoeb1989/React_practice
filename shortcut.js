
//check truthy and falsey
const myVar = 5;
if(myVar){
   myvar = myVar * 100;
}
else {
    myVar = 0;
}

// ternary shortcut if else 
let money = 80;
let food = money > 100 ? 'biryani' : 'cha biscuit'
console.log(food);

let drink = (money > 100 && myvar > 100) ? 'coke' : 'water';
console.log(drink);

// string to number

const input = '560';
const inputNum = +input
console.log(inputNum);