/** 
 * var is keyword in js.
 * var is a global keyword we can access variable from any where.
 * */
var amount = 0;
var myName = "Ajay";
function amountChange() {
    if (myName == "Ajay") {
        amount = 1000;
        console.log(myName);
    }
}
amountChange();

/**
 * Let is a scope level,we can access with in the scope
 * let{
 * ...
 * ...
 * }
 */
let a = 10;
age = 20;

let name="Shiva"
console.log(name);

/**
 * const is a scope level variable
 * we can access with in the scope & also value cannot be changed.
 */

const shirtPrice=1000;
console.log(shirtPrice);
shirtPrice=800;


