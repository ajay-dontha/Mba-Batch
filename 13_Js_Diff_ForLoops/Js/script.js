//for
for(i=0;i<=10;i++){
    console.log(i);
}

//for of
let student=[{
    id:123,
    fstName:"sai",
    email:"sai@gmail.com",
},
{
id:234,
fstName:"Rajesh",
email:"rajesh@gmail.com",
}]
//console.table(student);

for(let object of student){
    console.log(student);
}

//for in:
for(const obj in student){
    console.log(student);
}

//for each:
student.forEach((element)=>{
    console.log(element);
})