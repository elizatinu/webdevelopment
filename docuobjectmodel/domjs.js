//var heads=document.getElementsByTagName("h1")
//for(head of heads){
  //  head.style.color="green";
//}
//var hd=document.getElementById("one")
//hd.style.color="cyan"

//var hd1=document.getElementById("two")
//hd1.style.color="red "

//var lis=document.getElementsByClassName("lis")
//for(head of lis){
//    head.style.color="yellow";
//}
//var dm=document.getElementById("dm")
//dm.textContent="DocumentObjectMethods"

//dm.innerHTML="<em>DocumentObjectMethods</em>"

var lis=document.querySelectorAll("li")
lis.forEach(li=>li.style.color="cyan")

var ls=document.querySelectorAll(".lis")
ls.forEach(l=>l.style.color="red")

var hd=document.querySelector("#one")
hd.style.color="green"