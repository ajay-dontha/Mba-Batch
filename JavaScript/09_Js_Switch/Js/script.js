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

function add(fstValue,secoundValue){
    let sum=Number(fstValue)+Number(secoundValue);
    // console.log(sum);
    switch(prompt("Enter the value:")){
        case "add":
            add(10,20);
            break;
            default:
                console.log("Invalid Operation");
    }
}
add();
