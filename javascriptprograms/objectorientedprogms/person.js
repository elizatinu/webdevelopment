// class=>blue print,plan,design pattern
// object=>real world entity mi4atv
// reference=>

class Person{
    
    setPerson(age,names,gender){
        this.age=age;
        this.names=names;
        this.gender=gender;
    }
    printPerson(){
        console.log("name="+this.names);
        console.log("age="+this.age);
        console.log("gender"+this.gender)
    }


}

// object
var obj=new Person();
obj.setPerson(25,"ajay","male")
obj.printPerson()

var obj1=new Person();
obj1.setPerson(26,"sajay","male")
obj1.printPerson()

