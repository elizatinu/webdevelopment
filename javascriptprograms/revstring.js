function reverseString(str) {

    let newString = "";
    
    for (let i = str.length -1; i >= 0; i--){
    
    newString +=  str[i];
    
    }
    
    return newString;
    
    }
    
    const string = reverseString('HELLO WORLD');
    
    const result = reverseString(string);
    
    console.log(result);