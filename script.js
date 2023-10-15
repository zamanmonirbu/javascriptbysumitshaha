// class Car {
//     constructor(brand,year) {
//       this.carName = brand;
//       this.year = year;
//     }
//     present() {
//       return 'I have a ' + this.carName;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand,year, mod) {
//       super(brand,year);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model+ this.year;
//     }
//   }
  
// class Model extends Car{
//     constructor(brand,year,mod){
//         super(brand,year)
//         this.model=mod;
//     }
//     show()
//     {
//         return this.present()+this.model
//     }
// }

//   let myCar = new Model("Ford","2000", "Mustang");
//   console.log(myCar.show())


// console.log("1")
// setTimeout(function(){
//     console.log(2)
// },0)
// console.log(3)

// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


// document.getElementById("seeDate").addEventListener("click",function setDateAndTime(){
//     document.getElementById("seeDate").innerHTML= Date();
//     console.log("Clicked")
// })
// const valueFind=document.getElementById("demo").firstChild.nodeValue;
// console.log("hello",valueFind)

// const p=document.createElement('p')
// const para=document.createTextNode("This is new")

// p.appendChild(para)


// const element = document.getElementById("div1");
// element.appendChild(p);

// const p1=document.getElementById('p1')
// const p2=document.getElementById('p2')

// setTimeout(()=>{
//     p1.innerHTML="Yes";
// },2000)

// setInterval(()=>{
//     p2.innerHTML=new Date().toLocaleTimeString();
// },1000)

// const myObject={
//     name:"monir",
//     age:'34',
//     Roll:"19cse035"
// }

// const keys=Object.keys(myObject)
// const Values=Object.values(myObject)
// const entity=Object.entries(myObject)

// console.log(keys,Values,entity)


// const nameMy=(x=10)=>{
//     return x;
// }
// console.log(nameMy(null))

// const numbers = [1, 2, 3, 4, 5, 6,7,8];
// let a= [...numbers];// It will give the main number array
// let A= numbers; //Here A will give output with 4
// numbers.push(4)
// console.log(a)

// const obj1={
// x:1,
// y:8
// }
// const obj2={
// a:1,
// b:8
// }

// console.log({...obj1,...obj2})

// const number=(a,...rest)=>{
//     console.log(a,rest)
// }
// number(12,3,4,5,6,7)

// Destructure

// const user={
//     nameUser:"Monir",
//     roll:"19cse035",
//     dress:{
//         color:"Red",
//         price:"200"
//     }
// }
// const {dress:{color}}=user
// console.log(color)

// const numbers=[1,3,[4,5,6],7];

// const [,c,[,a,b]]=numbers;
// console.log(a,b,c)

let a=5,b=6;
[b,a]=[a,b];
console.log(a,b)
