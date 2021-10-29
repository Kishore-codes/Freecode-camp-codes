//deep copy
let name="kishore";
let newName=name;
 newName="cherry"
console.log(newName)
console.log(name)


//shallow copy
// shallow copy is done only in non primitive data types
let person={
    name:"kishore",
    age:"23"
}
 const info=person;
 info.name="cherry"
 console.log(info)
 console.log(person)

 //making deep copy in objects using spread operator
 const car={
     model:"benx23",
     color:"black"
 }

 const newCar={...car};
 newCar.color="greuyy";
 console.log(car)
console.log(newCar)

//making deep copy in array using spread operator
let arr=[1,2,3,4,4];
let arr1=[...arr];
arr1[4]=5;
console.log(arr);
console.log(arr1)

//spread in array of objects
//doubt problem
let data=[
    {id:"1",name:"kishore"},
    {id:"2",name:"poopo"}
]

let newData=[...data];
newData[1].name="cherryyh"
console.log(newData)
console.log(data)
 
//slice method to copy array
const a=[1,2,3,4,5,5];
const b=a.slice(1,4)
console.log(a)
console.log(b)

//join() method
let fruits=["apple","orange","grapes"];
console.log(fruits.join("-"))

//fill method
let nums=[2,3,4,4,5,5]
let bool=true
console.log(nums.fill("cherry"))
console.log(nums.fill(bool,1,2))

//splice method
//adding item in index no 2
const job=["web developer","analyst", "android developer" ]
job.splice(2,0,"programmer")
console.log(job)
//deleting selected item
let cars=["rolls royce","benz","bmw","audi"]
cars.splice(2,2);
console.log(cars)