function Factorial() {
    console.log("Factorial")
}

var a=6

if(a>0&&a<10){

    console.log(a)
}



var a=88

if(a==10||a>50){

    console.log(a)
}

const abc = (a)=>a
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    console.log(abc(7)+sum)
  }
  myCalculator(1,2)


var obj ={};

obj.a=90
obj.a=78

console.log(obj.a)


const obj = {
    userName :"Faizan",
    age:20,
    addres :"Lahore",
    gender:"Male",
    sex :"Virgin",
    study:16
}
obj.userName="Ali"
const {userName,age}=obj


console.log(Object.keys(obj))
console.log(Object.values(obj))


const arr =[1,2,3]
const [a,b,c,d]=arr

console.log(d,a,b)



