var a={
    name:'janhavi',
    phone:'samsung'
}
console.log(a)

//Accessing a specific value 
var obj={
    name:"Janhavi",
    age:19,
    city:"Mumbai"

}
console.log(obj.age)


// CRUD- Create, Read, update delete in an object 
//1.Create 
var user={
    name:"Janhavi",
    age:20,
   batch: "cohort 3.0"
}
user.city="Mumbai"
console.log(user)

//2. Update
var user={
    name:"Janhavi",
    age:20,
   batch: "cohort 3.0"
}
user.age="17"
console.log(user)



//3.Delete
var user={
    name:"Janhavi",
    age:20,
   batch: "cohort 3.0"
}
delete user.age
console.log(user)





// To access a specific key and value of a object
/*var  phone= {
    model: "Galazy Z",
    price:"4,50,000",
    country:"India"
}
console.log(Object.keys(phone))*/


/*var  phone= {
    model: "Galazy Z",
    price:"4,50,000",
    country:"India"
}
console.log(Object.values(phone))
console.log(Object.entries(phone))*/




// Storing Non-primitaive data in Objects 

//1. Array 
/*var person={
    name: "Janhavi",
    age:18,
    skills:["Paintings", "Reading", "Cycling"]
}
console.log(person.skills[1])*/


// 2. Storing one object in another object
/*var person={
    name: "Janhavi",
    age:18,
    skills:["Paintings", "Reading", "Cycling"],
    spouse:{
        married:true,
        age: 34,
        profession: "teacher"
    }
}
console.log(person.spouse.age)*/



// Guess the output : 
/*var user = {
  name: "Price Singh",
  age: 20,
  isHandsome: true,
  skills: ['HTML', 'CSS', 'JS'],
  college: {
    name: 'Sheryians Coding School',
    totalStudent: 200,
    courses: ['Web Development', 'Data Science', 'Campus placement']
  }
}
console.log((user.college.totalStudent - user.age) + user.college.courses[2]);*/  // 180Campus Placement */


// Function- function inside a object is called method
/*var obj = {
    name: 'Chitthi',
    ram: '20mb',
    age: 1,
    isworking: false,
    skills: ['fight', 'walk', 'dance'],
    creator: {
        name: 'vashi',
        age: 40,
        isIntelligent: true
},
greet: function(a){
    console.log("hello", a)
    return "yup"
}
}

//obj.greet("janhavi") // if we write heere console.log(obj.greet) it will return good morning and undefined since function is returning nothing 
console.log(obj.greet("janhavi"))// if we write heere console.log(obj.greet) it will return good morning and undefined since function is returning nothing  now it will return
console.log(typeof console)*/ // even console is an object 





//condition in object  using tertinary operators
/*var myage=20
var obj={
    name:"Janhavi",
    age:myage>25 ? myage:30
}
console.log(obj)*/



// object as reference data type
/*const groom={
    name:"Salman",
    age:60
}

const bride={
    name:"Kat",
    age:40
}

groom.name="Vicky"
console.log(groom.name, "weds", bride.name)*/


// Object.seal- no new property can be added only you can change the existing property ( no create and delete)
/*var user={
    name:"janhavi",
    age:18,
    city:"Mumbai"

}

Object.seal(user)
user.country="India"// this is not getting added as is seal
console.log(user)*/

// Object.freeze : no create, delete or update
/*var user={
    name:"janhavi",
    age:18,
    city:"Mumbai"

}

Object.freeze(user)
user.name="India"// this is not getting updated as its freeze
console.log(user)*/




// seal and freeze in array
/*const arr=[10,20,40]
Object.seal(arr)
// arr.push(56)// shows error as push pop cant't be done not even add not even delete arr[2]
arr[2]=99 // but we can update 
console.log(arr)*/


//2.freeze
/*const arr=[10,20,40]
Object.seal(arr)
// arr.push(56)// shows error as push pop cant't be done not even add not even delete arr[2]
arr[2]=99 // but we caa't even update here 
console.log(arr)*/









// DESTRCUTUING 
//1. for array
/*var arr=[10,20,30]
var [a,b,c]=arr
console.log(c)*/

// using rest operator
/*var arr=["janhavi", "i", "a", "roop", "aditya","nupur"]
var [a,b,...c]=arr // rest element must be the last element 
console.log(c)*/



//2.Objects 
/*var obj={
    name:"janhavi",
    age:20
}
var {name,...b}=obj
console.log(b)*/


//method
//JSON.stringify()-convert given value to string
 /*var a=20
 var b=JSON.stringify(a)
 console.log(b)
 console.log(typeof b)*/



 // JSON.parse= convert a string to object 
 /*var a=10
 var b=JSON.stringify(a)
 var c=JSON.parse(b)
 console.log(c)
 console.log(typeof c)*/

 

 // creating a shallow copy 
 /*var arr=[10, {name:"Janhvi", age:29}, 30]
 var str=JSON.stringify(arr)
 var arr2=JSON.parse(str)
 console.log(arr2)
 arr2.push(60)*/ 


 //deep copy 



