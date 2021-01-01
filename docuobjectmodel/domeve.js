var cl=document.querySelector("#clk");
cl.addEventListener("click",()=>{
    cl.textContent="clicked";
    cl.style.color="red";
})
var ov=document.querySelector("#over")
ov.addEventListener("mousemove",()=>{
    ov.textContent="mouse currently overme"
})
// #mousemove
// mouseout
// dbclick