// let arr = [1,2,3,4,5,6]
// index   0,1,2,3,4,5
// console.log(arr)

//TO String mathod 
//arrays are basically type object but we can convert them to strings

// console.log(arr.toString())

//we can also join the elements of the array using join mathod 

// console.log(arr.join(" | "))

//POP mathod
//it removes the last element of the array

// a= [2,4,6,8,9]
// console.log(a.pop()) //it will return the value of the removed element
// console.log (a)

//Push Mathod
//it add a new element at the end of the array

// let pushh= [1,2,3,4]
// console.log(pushh)
// pushh.push (888,"Irtza")//we can push multiple new values at once
// console.log(pushh)


//shift mathod
// it will remove the first element of the array 

// let a = [1,2,3,4]
// a.shift (1)
// console.log(a)

// Unshift mathod
//It will add a new element in the start of the array 

// let a = [1,1,1,5,1]
// a.unshift(2)
// console.log (a)

// Index of Mathod
//this mathod used to locate the index of any element in array

// let a =[1, "Irtza", true, null]
// console.log(a)
// console.log(a.indexOf(true))

//Delete Mathod
//this mathod is used to delete any element in an array

// let a =[1, "Irtza", true, null, "I want to delete it"]
// delete a[4] //To delete the element of an array we need to provide the index of that element
// console.log(a)//It will delete the value but it will not delete the memory so when we print the length of that particual array it will show us an empty space (IQ (interview question))
// console.log(a.length)// so the length of the array would be same after deleting any element

//Concat mathod
//this mathod used to joing the arrays but this will not change the existing aray it will return a new array

// let firstName =["Irtza"]
// let secondName=["Shafiq"]
// let cast = ["Ansari"]
// console.log(firstName.concat(secondName,cast))

//mathod sort
//it will sort the existing aray

// let a =[2,4,3,1,6,7,5]
// console.log(a.sort()) //this is an advanced topic 

//Splice Mathod
// this mathod uses to remove some elements from an array by giving the starting (compulsory) and ending index

// let a=[1,2,3,4,5,6,7,8]
// a.splice(2,5)// this will delete all the between elements of index 2, 5 
// console.log(a)
//we can also remove and add the elements at the same time
// a.splice(2,5, "irtza", "Haider") // this will delete the between elements and adds the new values in it
// console.log (a)

//Slice Mathod
//this will slice out some elements of the array & it will create a new array. This just required the starting point of the array

// let arr = [1,2,3,4,5,6]
// console.log(arr.slice(1,5))
// console.log(arr.slice(4))

//Mathod Reverse
//this will return the whole array in a reverse mathod

// let a = [1,2,3,4,5,6]
//  a.reverse()
// console.log(a)

//Array.From Mathod
//this will convert any string or any object into the array


// console.log(Array.from("Irtza"))


//arrays are mutable we can update it 

// arr[0]=22
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[3])
// console.log(arr[5])

//but we cannot update a string like this. It is called immutable

// let a = " Irtza "
// console.log(a)
// a[0]= "Fury"
// console.log(a)

