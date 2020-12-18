// objects are stored in the form of key value pairs 
var students={
rol:150,
name:"sanjay",
course:"bca",
total:150
}
//key:value
//duplicate keys are not allowed
//duplicate values are allowed
//accesing values
console.log(students["rol"])
console.log(students.rol)
//sanjay
console.log(students.name)

for(let student in students){
    console.log(student+","+students[student])
}
//checking for a specific key
console.log("gender" in students)
//adding a new key value pair
students["gender"]="male"
console.log(students)
//update
student["total"]+=25
console.log(students)