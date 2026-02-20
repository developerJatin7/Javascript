// let str = "Apna colllege";
// for (let i = 0; i <10; i++) {
//     console.log("Apna college");
// }
// for(let i=1; i<=5; i++){
//     console.log(i);
// } 

// for(let i=0; i<=100; i++){
//     console.log(i);
// }

// for(let i = 1; i<=15; i= i+2){
//     console.log(i);
// }

// for(let i=2; i<=16; i = i+2){
//     console.log(i);
// }

// for(let i = 5; i>=1; i--){
//     console.log(i);
// }

// for(let i = 1; i>=1; i--){
//     console.log(i);
// }

// for(let i = 10; i>=10; i--){
//     console.log(i);
// }
// let sum = 1;
// let n = 8
// for( let i = 1; i<=n; i++){
//     sum = sum + i;
//     }
// console.log("sum =",sum);

// let i = 1;
// while (i<=5){
//     console.log("i",i);
//     i++;
// }
// let n = prompt("write a number");
// n = parseInt(n);
// for(let i = n; i<=n*10; i+=n){
// console.log(i);
// }
// for(let i = 1; i<=3; i++){
//    for(let j = 1; j<=3; j++){
//         console.log(j);
//    }
// }
    
// let favmovie = "avatar";
// let guess = prompt("guess my favourite movie");
// while((guess!= favmovie)&&(guess!=quit)){
//     prompt("wrong guess. please try again")
// }
// if(guess==favmovie){
//     console.log("congrats!!");
// }else{
//        console.log("quit");
// }
// let arr = [2,4,6,8,10];
// let  largest = 0;
// for(let i=1; i<arr.length; i++){
// if(largest<arr[i]){
//     largest = arr[i];
// }
// }
// console.log("largest element",largest);

// for(let i = 1; i<=20; i++){
// if(i%2===0)
//     console.log(i);

// }
// for(let i = 1; i<=100; i++){
//     if(i%2==0)
//     console.log(i);
// }
// for(let i = 1; i<=15; i=i+2){

//     console.log(i);
// }
// for(let i =1; i<=5; i++){
//     console.log("hello world");
// }
// let sum = 0;
// for(let i = 1; i<=10; i++){
//     sum += i;
//     console.log("this is sum:",sum);
// }
// for(let i = 5; i>=1; i--){
//     console.log(i);
// }

// let n = 5;
// let fact = 1;
// for(let i = 1; i<=n; i++){
//     fact = fact*i;
//     console.log("factorial of n is",fact);
// }

// let a = 25;
// let str = 1;
// for(let i = 1; i<=a; i++){
//     str = str*i;
//     console.log("factorial of a is:",str)
// }
// let arr = [10,20,30,40,50,];
// for(let i = 0; i<=arr.length; i++){
//     console.log(arr[i]);
// }
// let arr = [2,4,8,5,9,10];
// let largest = [0];
// for(let i =1; i <= arr.length; i++){
//     if(largest<arr[i]){
//         largest = arr[i]
//     }
//     console.log("the largest number is:",largest)

// }

// let arr = [3,2,5,6,7,8];
// let count = 0;
// for(let i = 0; i<arr.length; i++){

//     if(arr[i]%2!==0){
//         count++;
//     }
//     console.log("final count is:",count);

//     }
// let numbers = [2,3,4,5,6,6,1,6];
// let largest = 0;
// for(let i = 0; i<=numbers.length; i++){
//     if(largest<numbers[i]){
//         largest = numbers[i];

//     }
// }

//     let count = 0;
//     for(let i = 0; i<=numbers.length; i++){
//     if(largest==numbers[i]){
//         count++;
//     }
// console.log("the largest number is;",largest);
// console.log("the count is:",count);

// }
// let num = Math.floor(Math.random()*100)+1;
// console.log(num);

// const car ={
//     name : "BMW",
//     color : "black",
//     model : "BMW M5",    

// }
// car.name = "mercedes";
// car.model = "mercedes S-class";
// console.log(car);
// let str = "aabbcddeeff";
// let count = {}
// for(let i = 0; i<str.length; i++){
//     let char = str[i];
//     if(count[char]){
//         count[char]++;
//     }else{
//         count[char]=1;
//     }
// }
// console.log(count);

// let str = "abcaade";
// let count = {};
// for(i = 0; i < str.length; i++){
//    let char = str[i];
//    if(count[char]){
//     count[char]++
//    }else{
//     count[char] = 1

//    }

// }
// console.log(count);
// const student = {
//    name : "jatin",
//    showName : function(){
//       console.log(this.name);
//    }
// };
// student.showName();

// const student1 = {
//    name : "jatin",
//    showName : ()=>{
//       console.log(this.name);
//    }
// };
// student.showName();

// const box = {
//   size: 5,
//   showSize() {
//     setTimeout( () => {
//       console.log(this.size);
//     }, 500);
//   }
// };

// box.showSize();

// const user={
//    name : "jatin",
//    showName(){
//       setTimeout(()=>{
//          console.log(this.name);
//       },100);
//    }

// };
// user.showName();

// const obj = {
//   value: 20,
//   print() {
//     setTimeout( ()=> {
//       console.log(this.value);
//     }, 1000);
//   }
// };

// obj.print();

// const num = {
//    value: 10,

//    double() {
//       console.log(this.value * 2);
//    },
//    print() {
//       this.double();
//    }
// };
// num.print();

// const obj = {
//    fruits: ["apple","banana","mango"],
//    print(){
//       this.fruits.forEach(fruit=>{
//          console.log(fruit);
//       });
//    }
// };
// obj.print(); 

// const obj = {
//    number : [2,4,6,8,10],
//    printsquares(){
//       this.number.forEach( number=>{
//          console.log(number*number);
//       });
//    }
// };
// obj.printsquares();
// let arr = [5,6,3,8,1,9];
// const findMin = (arr)=>{
//    let min = arr[0];
//    for(i = 1; i<arr.length; i++){
//    if(arr[i]<min){
//       min = arr[i]
      
//    }
// }
// return min;
// };
// console.log(findMin(arr));

// let arr = [5,3,7];
// let sum = 0;
// const sumarray= (arr)=>{
//    for(i = 0; i<arr.length; i++){
//       sum = sum + arr[i];
//    }
//    return sum;
// }
// console.log(sumarray(arr));

// let arr = [5,8,9,3,6,2];
// const countOdd= (arr)=>{
//    let count = 0;
//    for(i = 0; i<arr.length; i++){
//        if(arr[i]%2!==0){
//          count++
//        }
//    }
//    return count;
// };
// console.log(countOdd(arr));

// let arr = [2,3,4,5];
// let doubled = arr.map((num)=>num*2);
// console.log(doubled);

// let name = ["jatin","aryan","gaurav"];
// let caps = name.map((word)=>word[0].toUpperCase()+word.slice(0));
// console.log(caps);

// let prices = [100, 200, 350];
// let Newprices = prices.map((price)=>price*1.18);
// console.log(Newprices);

// let students = [
//   { name: "Amit", marks: 45 },
//   { name: "Riya", marks: 82 },
//   { name: "Vikram", marks: 60 }
// ];
// let names = students.map((student)=>student.name);
// console.log(names);
// let marks = students.map((student)=>student.marks);
// console.log(marks);
// let result = students.map((student)=>
//      student.marks>= 50? "pass":"fail"
// );
// console.log(result);

// let textarea = document.createElement("textarea");
// let btn = document.createElement("button");

// btn.innerText = "click me";

// document.body.appendChild(textarea);
// document.body.appendChild(btn);

// textarea.setAttribute("placeholder","username");
// btn.setAttribute('id',"button");

// let heading = document.createElement("h1");
// heading.innerText = "DOM PRactices";
// heading.style.textdecoration = "underline";
// heading.style.color = "purple";
// document.body.appendChild(heading);

// let para1 = document.createElement("p");
// para1.innertext = "welcome to javascript DOM";
// para1.style.fontWeight = "bold";
// para1.style.color = "green";
// document.body.appendChild("para1");

// let btn = document.createElement("Button");
// btn.innerText = "Show";

// let para = null;

// btn.addEventListener("click" , function(){
//     if(para === null){
//         para = document.createElement("p");
//         para.textcontent = ("practice makes perfect");
//         para.classList.add("notstyle");
//         document.body.appendChild(p);
//     }else{
//         para.remove();
//         para === null;
//     }
// })

// let size = "XL";

// if(size === "XL"){
//     console.log("Rs.250");
// }
// else if(size === "L"){
//     console.log("Rs.200");
// }
// else if(size === "M"){
//     console.log("Rs.100");
// }
// else if(size === "S"){
//     console.log("Rs.50");
// }

let mark = 40;
if(55 >= mark){
     console.log("pass")
} else{
     console.log("fail")
}

let num = 35;
if(num%5===0){
    console.log("it is divisible by 5")
} else{
    console.log("not divisible  by 5")
}

let temp = 30;
if(20 >= temp){
    console.log("it is hot")
} else{
    console.log("it is normal")
}

let marks = 95;
if(marks >= 90){
    console.log("A")
}
else if(marks >= 75){
    console.log("B")
}
else if(marks >= 55){
    console.log("c")
}
else{
    console.log("fail")
}

let a = 25;
    b = 34;
    c = 23;
if((a >= b)&&(a >= c)){
    console.log("a is the largest")
}    
else if((b >= a)&&(b >= c)){
    console.log("b is the largest")
}
else{
    console.log("c is the largest")
}

let year = 2024;
if(((year%4 === 0)&&(year%100 !== 0))||(year%400 ===0)){
    console.log("it  is a leap year")
}
else{
    console.log("it is not a leap year")
}

let time = 20;
if(time < 12){
    console.log("it is morning")
}
else if((time >= 12)&&(time <= 17)){
    console.log("it is afternoon")
}
else{
    console.log("it is evening")
}

let unit =150;
if(unit <= 100){
    console.log("it is low")
}
else if((unit >= 101)&&(unit <= 200)){
    console.log("it is medium")
}
else{
    console.log("it is high")
}

let username = "admin";
let password = 1234;
if((username === "admin")&&(password === 1234)){
    console.log("login successfull")
}
else{
    console.log("invalid credentials")
}

let A = 6;
let B = 7;
let C = 8;
if((A + B > C)||(A + C > B)){
    console.log("it is triangle")
}
else{
    console.log("it is not a triangle")
}

let number = -7;
if(number > 0){
    console.log('positive')
}
else if(number < 0){
    console.log("negative")
}
else{
    console.log("zero")
}

let units = 400;
if(units <= 100){
    console.log("no fine")
}
else if((units > 101)&&(units < 300)){
    console.log("fine will be 500")
}
else{
    console.log('fine will be 1500')
}

let dataused = 180;
if(dataused <= 50){
    console.log("no extra charge")
}
else if((dataused >= 151)&&(dataused <= 300)){
    console.log("extra 700 charge")
}
else{
    console.log("Extra charge 1500")
}

let days = 12;
if(days <= 0){
    console.log("no fine")
}
else if(days <= 5){
    console.log("fine 50")
}
else if(days <= 10){
    console.log("fine 100")
}
else if(days <= 20){
    console.log("fine 200")
}
else{
    console.log("fine 500")
}

function checkresult(marks){
if((marks < 0)||(marks > 100)){
    return"invalid marks";
}
if(marks >= 40){
    return'Pass';
}
return "fail";
}

function withdraw(balance,amount){
    if((balance < 0)||(amount < 0)){
        return "invalid balance","invalid amount;"
    }
    if(balance >= amount){
        return "withdraw succefuly";
    }
    
        return "insufficient balance";
    
}
console.log(withdraw(500,300));

function getDiscount(age,time,isstudent){
    if(age < 0){
        return "invalid age";
    }
    if(time<0 || time>23){
        return "invalid time";
    }
    if(!isstudent){
        return "no discount";
    }
    if(age >= 60){
        return "price 150";
    }
    if(age<25){
        return "price 210";
    }
    return "300";
}
console.log(18,17,)