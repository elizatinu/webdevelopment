//7(1,7) 13(1,13)

var num=8;
var flg=0;

for(let i=2;i<num;i++){// i=2; 2<8
    if(num%i==0){//8%2==0
        flg+=1;//flg+=1
        break;
    }
    else{
        flg=0;
    }
}if(flg>0){//1>0
    console.log("not prime")
}
else{
    console.log("prime")
}