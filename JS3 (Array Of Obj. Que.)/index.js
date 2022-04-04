let studentRecords = 
[{name:'john',id:123,marks:98},
{name:'Babu',id:101,marks:23},
{name:'yaga',id:200,marks:45},
{name:'Wick',id:115,marks:75},]

//Q1

let result = studentRecords.map((value)=> value.name.toUpperCase())
console.log(result);

//Q2

let result1= studentRecords.filter((value)=>value.marks>50)
console.log(result1);


//Q3

let result2= studentRecords.filter((value)=>value.marks > 50 && value.id > 120)
console.log(result2);

//Q4

let Totalsum=studentRecords.reduce((cur,val)=> cur+val.marks,1 )
console.log(Totalsum);


//Q5

let morethan=studentRecords.filter((value)=>value.marks>50).map((value)=>value.name)
console.log(morethan);



//Q6

let result3=studentRecords.filter((value)=>value.id>120).reduce((val,cur)=> val+cur.marks ,0)
console.log(result3);

//Q7

let totalmarks=studentRecords.map((value)=>{
    if (value.marks<50){
        value.marks +=15;
    }
    return value;
}).filter((value)=>value.marks>50).reduce((cur,val)=>cur+val.marks ,0)
console.log(totalmarks);