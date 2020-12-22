var employees=[
    {id:100,name:"ajay",salary:25000,year_join:1980,year_resign:1990},
    {id:101,name:"vijay",salary:22000,year_join:1982,year_resign:1989},
    {id:102,name:"sanjay",salary:30000,year_join:1980,year_resign:1991},
    {id:103,name:"tom",salary:18000,year_join:1975,year_resign:1992},
    {id:104,name:"tinu",salary:25000,year_join:1978,year_resign:1985}
]
//find highest salaried employee
var salary=employees.
map(emp=>emp.salary).
reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(salary)

//print employees whose experience > 10 years
//employees.
//filter(emp=>(emp.year_resign - emp.year_join)>=10).
//forEach(emp=>console.log(emp.name))


//print all employee names only
//external iteration
//for (let emp of employees){
    //console.log(emp.name)
//}

//internal iteration
//employees.forEach(emp=>console.log(emp.name))

//print all employee whose salary > 24000

//employees.filter(emp=>emp.salary>24000).forEach(emp=>console.log(emp.name))









// 8 players
//print all playername uppercase
//print all player name who have played experience more than 8 years
//find the player who scored highest runs in his account

var players=[
{name:"sunilgavaskar",debue:1974,retired:1987,runs:10122}
]
