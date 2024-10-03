

// // find sqaure of each number
const number=[2,3,4,5,6,7]

const sqaure=number.map((num)=>{
    return  num*num

})
console.log(sqaure)




// take num and tell grade using thier mark
let grade=""
const gradeFunction=(mark)=>{
    grade = mark>=90 ? "A" :
    grade = mark>=80 ? "B" :
    grade = mark>=50 ? "c" :
    grade = mark>=40 ? "D" :
    grade = mark>=30 ? "E" : "F"

}

gradeFunction(29)
console.log(" You got grade>", grade)



//object with car details
 let userEnter=2024

 const car = {
    companyName: "Sukuki",
    model: "Top Model",
    year:""
};

function changeYear(year) {  
    car.year = year; 
}
changeYear(userEnter);

console.log(car); 

const {model, year}=car
console.log(`Model : ${model}  Year : ${year}`)




//use map, filter and reduce
const arr =[2,5,7,8,9]

arr.map((value)=>{
    console.log(value)
})


const filterNum= arr.filter((value)=>value !==8)
console.log(filterNum)


const reduceFuction= arr.reduce((value, current)=>value+current, 0)
console.log(reduceFuction)



//fetching data
const fetchData=async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =  await response.json()
    console.log("Api Data", data)
}
fetchData()






// nested object representing person
const person = {
    name: "John Doe",
    address: {
      street: "Gali no c240",
      city: "Pandav Nagar",
    },
   
    contact: { phone: "555-1234" }
  };
  
  const phoneNumber = person.contact?.phone;
  
  console.log(phoneNumber); 
  

