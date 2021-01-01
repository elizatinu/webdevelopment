class Student{
    constructor(rol,name,course){
        this.rol=rol;
        this.name=name;
        this.course=course;
    }
    prinStudent(){
        console.log("name",this.name);
        console.log("rol",this.rol);
        console.log("course",this.course)
    }
}

let obj=new Student(100,"ajay","mca")
obj.prinStudent()

// setStudent() duty?
// initializing instance variable

// constructor()
//duty of constructor is initializing instance variable
//constructor name is always
//it is invoked automatically at the time object creation

//class,object,reference

// different types of variables
// instance variables
// instance variables are always prepended with this keyword
// we can access instance variable with int the class by using this keyword
// we can access instance variable outside the class by using reference name.instance variable name