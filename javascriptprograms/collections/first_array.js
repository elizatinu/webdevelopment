//array
//to store more than one objects
//we can store any type of objects
//there is no length limit
//define by using []
var names=["javascript","java","python","c#","dart"]
//index       0            1      2      3      4
console.log(names[1])
//iterate
for(let items of names){
    console.log(items)
}
//adding a new object to array
names.push("perl")
console.log(names)
//removing an item from array
names.pop()
console.log(names)
