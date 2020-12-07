var number=123;//321

while(number!=0){//123!=0 12!=0 1!=0 0!=0
    var digit=number%10;//digit=3 12%10 2 1%10=1
    console.log(digit);
    number=Math.floor(number/10);//12.3 floor=12 12/10=1.2 floor=1 1/10=0.1 floor=0

}
