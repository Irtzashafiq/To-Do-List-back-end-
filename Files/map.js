//Mapp Mathod
// It will return something

// const arr = [1,2,3,4,5,6]

// check = arr.map(item => {
//     item =item*5
//     return item
// })
// console.log (check)

// let arr = [2,4,6,8,9]

// let check = arr.map((e)=>{
//     return e**2
// })
// console.log(check)

//filter way 1
//this mathod use to print some specific values of the array like if we want to print the values of the array which are greater than 9
//In this way we are creating a function seperately
// let arr= [2,5,10,15,20,25]
// const greaterThanTen = (e)=>{
// if (e>10) {
//     return true
// }
// return false
// }
// console.log(arr.filter(greaterThanTen))

// 2nd way of using filter mathod
//In this way we are using the function inside the console.log rather than creating it seperatly and call again in te console.log
// let arr = [2,5,10,15,20,25]
// console.log(arr.filter(greaterThanNine=(e)=>{
//     if (e>9) {
//         return true
//     }
//     return false
// }))

//Reduce Mathod
//this will perform the particular function to first 2 elements of the array 
//In our case it will perform the add function to first to elements and then add the 3rd element in the answer and so on and at last it will print the final answer in a single value

// let arr=[1,2,3,4,5,6]

// const red = (a,b)=>{
// return a + b 
// }
// console.log(arr.reduce(red))

//Find Mathod
//
const ages = [16,17,18,22]
const adult =((e)=>{
    if (e>18) {
        return true
    }
    return false
})
console.log (ages.find(adult))
// console.log(ages.find(((e)=>{if (e>18){return e}})))