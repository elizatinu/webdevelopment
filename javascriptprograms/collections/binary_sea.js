var arr=[6,2,5,3,1,4]
arr.sort((no1,no2)=>no1-no2)
console.log(arr)
         //e
//      3  4  5  
//      2  3  4  
//         l,u,m    

var element=4
var low=0
var upp=arr.length-1
var flg=0//0<5
while(low<=upp){
var mid=Math.floor((upp+low)/2);  //mid=0+5/2=2.5 =2 3+5/2=4 3+3/2=3
if(element>arr[mid]){//4>3 4>5 4>4
    low=mid+1;//low=3
}
else if(element<arr[mid]){//4>4
    upp=mid-1;//upp=3
}
else if(element==arr[mid]){
    flg=1;
    break;
}
}
if(flg==0){
    console.log("element not found")
}
else{
    console.log("element found")
}
//case 1
//if element >arr[mid] 3>arr[2] 4>arr[2] 4>3 2>3
//low=mid+1

//case 2
//if element<arr[mid] 3<3 2<3
//upp=mid+1
//case 3
//if element===arr[mid] 3=3