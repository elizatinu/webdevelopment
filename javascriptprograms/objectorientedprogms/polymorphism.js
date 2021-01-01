// many forms (more than one form) polymorphism


class MathsPg{
    add(){
        console.log("no arg method")
    }
    add(num1){
        console.log("single arg method")
    }
    add(num1,num2){
        console.log("two arg method")
    }
    add(num1,num2,num3){
        console.log("three arg method")
    }
}

var m=new MathsPg()
m.add()

// same methodname different number of arguments method overloading
// will execute only recently implemented method