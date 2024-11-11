
// datatypes 

// let a = 10;
// console.log(a);
// var v = 11;
// console.log(v);;
// const e = 13;
// console.log(e);


// function


// example 1

// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`;
// }

// let teaOrder = makeTea("Green Tea");
// console.log(teaOrder);


// example 2

// function orderTea(teaType) {
//     function confirmOrder() {
//         return `Order confirmed for ${teaType}`;
//     }
//     return confirmOrder();
// }

// let confirmOrder = orderTea("Coffee");
// console.log(confirmOrder);


// example 3 -------> Arrow function

// let calculatedTotal = (price, quantity) => {
//     return price * quantity;
// };
// let store = calculatedTotal(5, 2);
// console.log(store);


// example 4  ----------- higher order functions

// function makeTea(typeOfTea) {
//     return `makeTea: ${typeOfTea}`
// }

// function processTeaOrder(makeTea) {
//     return makeTea('earl grey')
// }

// let order = processTeaOrder(makeTea);
// console.log(order);


// example 5

function makeTea(teaType) {
    return `making ${teaType}`;
}

function createTeaMaker(makeTea) {
    
}

var teaMaker = makeTea("Green Tea");
console.log(teaMaker);
