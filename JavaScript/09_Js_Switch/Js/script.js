let age = 10;
function displaySwitchCase() {
    switch (age) {
        case 10:
            console.log("Age 10");
            break;
        case 20:
            console.log("Age 20");
            break;
        default:
            console.log(" No Age ")
    }
}
displaySwitchCase();

//Example of Switch on add,mul,sub using functions
function add(firstValue, secoundValue) {
    let sum = Number(firstValue) + Number(secoundValue);
    console.log(sum);
  }
  
  function sub(firstValue, secoundValue) {
    let sub = Number(firstValue) - Number(secoundValue);
    console.log(sub);
  }
  
  function mul(firstValue, secoundValue) {
    let mul = Number(firstValue) * Number(secoundValue);
    console.log(mul);
  }
  
  
  switch (prompt("Enter the operation")) {
    case "add":
      add(10, 20);
      break;
    case "sub":
      sub(10, 20);
      break;
    case "mul":
      mul(10, 20);
      break;
    default:
      console.log("Invalid Operation")
  }