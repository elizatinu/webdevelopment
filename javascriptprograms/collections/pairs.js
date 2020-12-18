var arr=[1,2,3,4,6];//6(2,4)
//0  1  2  3  4
//1  2  3  4  6
//l           u 1+4=5 5>6
arr=arr.sort((n1,n2)=>n1-n2)
var low=0;
var upp=arr.length-1;//4
var element=6;
while(low<upp){//0<4 0<3 1<3
    let tot=arr[low]+arr[upp];//arr[0]+arr[4]6=7 1+4=5 2+4=6
    if(tot>element){//7>6 5>6 6>6
        upp=upp-1;//upp=4-1=3
    }
else if(tot<element){//6<6
    low=low+1;
}
else{
    console.log(arr[low]+","+arr[upp]);
    low=low+1;
}
}
