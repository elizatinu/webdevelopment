class Person{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    printPerson(){
        console.log(this.name);
        console.log(this.id)
    }
}
let obj=new Person("tinu",142)
obj.printPerson()