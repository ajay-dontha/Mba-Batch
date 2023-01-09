// /**
//  * 1.if
//  * 2.if else
//  * 3.if elseif else
//  * 4.nested if
//  * 5.ladder if
//  */

// //if
// console.log("if:")
// var age = 17;
// if (age >= 18) {
//     console.log("You Are Eligible")
// }

// //if else using funtion with parameter
// console.log("if Else:")
// /**
//  * age=false>true;
//  */
// function marriageEligibility(age) {
//     if (age > 24) {
//         console.log("You Are Eligible");
//     } else {
//         console.log("You Are Not Eligible");
//     }
// }
// marriageEligibility(24);

// //if elseif else function with parameter
//     function studentGrade(marks) {
//         if (marks >= 35 && marks <= 59) {
//             console.log("Third Class")
//         } else if (marks >= 60 && marks <= 79) {
//             console.log("Secound Class");
//         } else if (marks >= 80 && marks <= 100) {
//             console.log("Distinction");
//         } else {
//             console.log("Invalid or Fail");
//         }
//     }
//     studentGrade(); 

//Ladder if{ if after the if }


function amount() {
    //var amount = (prompt());
    if (amount == 1000) {
        console.log("Amounts are equal");
    }   //11000
    if (amount > 1000) {
        console.log("Amounts are greater than 1000");
    }  //110
    if (amount < 1000) {
        console.log("Amounts are less than 1000");
    }
}
amount();

//Nested if {if inside the if }
function Eligible(age) {
    if (age > 0) {
        console.log("Duck Out");
        if (age > 50) {
            console.log("Half Century")
            if (age > 100) {
                console.log("You Are RockStar");
            }
        }
    }
}
Eligible(49);


