var arr=[1,5,3,6,2,8,4]
// searching for an element from this array
var element=8;
var flag=0;
for(let i=0;i<arr.length;i++){

if(element==arr[i]){
flg+=1;
break;
}
}
if(flg==0){
    console.log("element not found")
}
else{
    console.log("element found")
}