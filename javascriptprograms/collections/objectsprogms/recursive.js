var pattern="ABABC"
var dict={}

for (let char of pattern){
    //console.log(char)
    if(char in dict){
        console.log("first recursive char="+char)
        break;
    }
    else{
        dict[char]=1
    }
}