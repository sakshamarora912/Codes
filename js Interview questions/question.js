// {
//     // let a=1;
//     // const b=1;
//     var c=1;
// }
// console.log(c)

// function test(){      // var can't shadow let
//     var a=1

//     if(true){
//         let a=1
//         console.log(a)
//     }
//     console.log(a)
// }

// test()


// hoisting
// console.log(a);
// // var a=1   //undefined
// // let a=1     // error
// const a=1; error


// function abc(){
//     console.log(a,b,c);
//     const c=1;   //temperal dept zone =>variable are in scope but not yet declared 
//     let a=1;
//     var b=1;
    
// }
// abc()

// const sum =(array)=>{
//     array.map(element =>element*3);
//     array.forEach((ele, i, arr) => {arr[i] = ele * 3});
    
//     console.log(array,array)
// }
// sum([1,2,3,4]);

// let students=[
//     {name:"garima",age:"28"},
//     {name:"saksham",age:"23"},
//     {name:"pragati",age:"22"},
// ]

// const caps=students.map(stu=>stu.name.toUpperCase());
// const age=students.filter(stu=>stu.age>22);
// const onlyName=age.map(name=>name.name);
// const updatedAges = students.map(stu => {
//     return {
//         name: stu.name,
//         age: +stu.age > 25 ? +stu.age + 20 : +stu.age
//     };
// });
// console.log(caps,age,onlyName,updatedAges);

// IFEE
// (function(x){
//     return function(y){
//         console.log(x)
//     }(2)
// })(1)

// var a=10,b=20;
// const sum=()=>a+b;
// console.log(sum())

//     function getSum(){
        
//         const sum=()=>a*b;
//         let a=1,b=2;
//         return sum ()
//     }
//     console.log(getSum())

//     var a=10;
//     function getSum(){
       
//         console.log(a)
//         let a=100
        
//     }
//     console.log(getSum())


// for(let i=0;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// }


// rest operator 

// function sum(a){
//    console.log(a[1]+a[0])
// }
// sum([2,4])



// function display(a,b,c,...num){
//     console.log(b,c,num);
// }
// display(1,2,3,4,5,6,7,8)

// function a(){
//     console.log(arguments)
// }
// a(1,2,3,4)


// let user={
//     username:"Saksham Arora",
//     a:()=>{
//         console.log(this. username)
//     },
//     b(){
//         console.log(this.username)
//     }
// }
// user.a();
// user.b();

// let a="hello"
// function fun1(b){
//     return function fun2(c){
//        console.log(a+" "+b+" "+c)
//     }
// }
// fun1("saksham")("arora");

// let count =0;
// (function printCount(){
//     if(count===0){
//         var count=1;
//         console.log(count)
//     }
//     console.log(count)
// })()


// function createBase(num){
//     return function(innernum){
//         console.log(num+innernum)
//     }
// }
// //createBase(1)(4)
// var add=createBase(5);
// add(6)

// function find(){
//     a=[];
//     for(let i=0;i<1000000;i++){
//         a[i]=i*i
//     }
//     return function(index){
//         console.log(a[index])
//     }
// }
// const closure=find()
// console.time("closure")
// closure(50);
// console.timeEnd("closure")


// function find1(index){
//     a=[];
//     for(let i=0;i<1000000;i++){
//         a[i]=i*i
//     }
//     console.log(a[index])
// }

// console.time("50")
// find1(50)
// console.timeEnd("50")

// function a(){
//     for(var i=0;i<5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }
// a()

// function counter(){
//     let _counter=0

//     const add=(i)=>_counter+=i;
//     const display=()=>"counter ="+_counter;
//     return {add,display}
// }

// const c=counter();
// c.add(5)
// c.add(10)
// console.log(c.display())

// const f = (a)=>(b)=> b ? f(a + b) : a;
    
// console.log(f(4)(5)())

// const sum = a => (b,c)=>a+b+c;
// console.log(sum(1)(2,2))

// function curry(func) {
//     return function curriedFunc(...args) {
//         // console.log(func.length)
//         console.log(func(...args))
//         if (args.length >= func.length) {
//             return func(...args);

//         } else {
//             return function(...next) {
//                 // console.log(next)
//                 return curriedFunc(...args, ...next);
//             };
//         }
//     };
// }

// const sum = (a, b, c, d) => (a + b + c + d);

// const totalSum = curry(sum);
// console.log(totalSum(1)(2)(3)(4)); // Output: 10

// const curry = func =>curriedFunc = (...args) => args.length >= func.length ? func(...args) : (...next) => curriedFunc(...args, ...next);
// const totalSum = curry((a,b,c,d)=>a+b+c+d);
// console.log(totalSum(1)(2)(3)(4)); // Output: 10



// const property="firstName";
// const name="saksham Arora";

// const user={
//     property:name, 
//     age:40,
//     [property]:name,
//     age:23
// }
// for(keys in user){
 
//     // console.log(user[keys])
//     console.log(keys)
//     // console.log(user)
// }
// console.log(user.firstName)

// const num={a:100,b:200,c:"hello"}

// function f(obj){
//     for(let key in obj){
//         if(typeof obj[key]=="number"){
//             obj[key]*=2;
//         }
//     }
// }
// f(num)
// console.log(num);


// const a={}
// const b={key:"b"}

// a[b]=245

// console.log(a)

// const user={
//     name:"saksham",age:23
// }
// console.log(JSON.stringify(user))

// const user={name:"saksham",age:23};
// const user1={surname:"arora",user}
// console.log(user1)

// const radius=20
// const shape={
//     radius:10,
//     diameter(){return this.radius*2},
//     perimeter:()=>2*Math.PI*radius
// };
// console.log(shape.diameter());
// console.log(shape.perimeter())


// destructuring

// const user={name:"saksham",age:23};
// const {name}=user
// console.log(name)

// var a={greeting:"hello"};
// let b;
// b=a;

// b.greeting="hey"
// console.log(a.greeting);

// let person = {name:"saksham"};
// let data=person
// person=null
// console.log(data)

// let num={value:10}
// const add =(x={...num})=>{
//     console.log((x.value+=10))
// }
// add()
// add()
// add(num)
// add(num)

// function a(person){
//     person.age=24;
//     person={name:"saksham",age:40}
//     return person
// }
// const obj={name:"shivam",age:"25"}
// const obj2=a(obj)

// console.log(obj)
// console.log(obj2)


// this.a=17
// const print=()=>{
//     console.log(this.a)
// }
// print()

// let user={
//     name:"saksham",
//     getDetail(){
//         console.log(this.name)
//     }
// }
// user.getDetail()

// const obj=[
//     {key:"s1",data:"d1"},
//     {key:"s1",data:"d1"},
//     {key:"s2",data:"d1"},
//     {key:"s1",data:"d1"},
//     {key:"s3",data:"d1"},
//     {key:"s4",data:"d1"},
// ]

// const Output={};
// obj.forEach(i=>{
//     Output[i.key]
//         ?Output[i.key].push(i.data)
//         :Output[i.key]=[i.data];  
// })

// console.log(Output)


// const a=[1,2,3[3,5,6[5,7],8,9]]

// function array(a,arr){
//     if ()
// }


// const a = [1, 2, [8, 3], 3, 4];
// (function print(a, arr) {
//     for (let i = 0; i < a.length; i++)
//         typeof a[i] === 'number' ? arr.push(a[i]) : print(a[i], arr);
//     console.log(arr);
// })(a, []);

// function addAll() {
//     return {
//         totalAmount: 0,
//         crore(amount) {this.totalAmount += amount * 10000000;return this;},
//         lacs(amount) {this.totalAmount += amount * 100000;return this;},
//         thousand(amount) {this.totalAmount += amount * 1000;return this;},
//         value() {console.log(this.totalAmount);}
//     };
// }
// addAll().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

// let input = document.createElement('inout');
// const state={value:'hi'}
// model(input,state);

// function model(input,state){
//     input.value=state.value;
//     Object.defineProperties(state,'value',{
//         get(){return this.value},
//         set(newval){
//             if(newval!==input.value){
//                 input.value=newval
//             }
//             return
//         }
//     })
//     input.addEventListener('change',(e)=>{
//         const newValue=e.target.value;
//         state.value=newValue
//     })
// }
// console.log(input.value);
// state.value="dev";

// let a={
//     fname:"saksham",age:21,
//     b:{
//         pname:"shivam",age:24,
//         getDetails(){console.log(this.fname+"    "+this.pname)}
//     }
// }
// a.b.getDetails();

// let a={
//     fname:"saksham",age:21,
//     result:()=>{console.log(this.fname)},
//     result_2(){
//         const getDetails=()=>{console.log(this.fname)}
//         getDetails()
//     }
  
// }
// a.result();
// a.result_2();


// let user = {
//     name: "saksham",
//     getName() {
//         console.log(this.name);
//     }
// };

// setTimeout(() => user.getName(), 1000);

// let length=10;

// function callback(){
//     console.log(this.length)
// }
// const object={
//     length:1,
//     method(fn){
//         console.log(arguments)
//         arguments[0]()
//     }
// }
// object.method(callback,2,3)


// CALL

// var obj={name:"saksham"}
// function hello(age){
//     console.log(this.name+" "+age)
// }
// hello.call(obj,34)

// let  status = "hello";
// setTimeout(() => {
//     const status = "hi";
//     const data = {
//         status: "bye",
//         getstatus() {
//             console.log(this.status); 
//         }
//     };
//     data.getstatus.call(this); 
// }, 0);

// // let name="saksham",age=32;
// const student=[{name:"saksham",age:23},{name:"garima",age:"24"}]
// function printData(){
//     function print(){
//         console.log(name+" "+ age)
//     }
//     print()
// }

// for(let i=0;i<student.length;i++){
//     printData.call(student[i],i)
// }

// const number=[1,2,3,4,4,5,7]
// console.log(Math.max.apply(null,number));

// function f(){
//     console.log(this)
// }
// let user={
//     g:f.bind(null)
// }
// user.g()


// function checkPassword(success,failed){
//     let password="hello";
//     if(password==="hello") success();
//     else failed();
// }

// let user={
//     name:"saksham",
//     // loginSuccessfull(){console.log(`${this.name} logged in`)},
//     // loginFailed(){console.log(`${this.name} failed to log`)}
//     login(result){
//         console.log(this.name + (result ? "log" : "failed"))
//     }
// }

// // checkPassword(user.loginSuccessfull.bind(user),user.loginFailed.bind(user))

// checkPassword(()=>user.login(true),()=>user.login(false))

// let age=10;
// var person={
//     name:"saksham",age:20,
//     arrow:()=>console.log(this.age),
//     normal:function(){console.log(this.age)}
// }
// var person2={age:23};
// person.normal.call(person2)

// console.log('start');
// function action_1(fname,cb){
//     setTimeout(() => {
//         cb(`hello ${fname}`)
//     }, 100)
// }
// function action_2(lname,cb){
//     setTimeout(() => {
//         cb(`hello ${lname}`)
//     }, 100)
// }

// const message=action_1("saksham",(message)=>console.log(message))
//               action_2("arora",(message)=>console.log(message))
// console.log('stop')

// console.log('start');
// const sub=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const result=true;
//         if(result) resolve("hello")
//         else reject(new Error("fuck you"))
//     },1000);
// })

// sub.then(res=>console.log(res)).catch(err=>console.log(err))
// console.log("stop")

// console.log('start');
// function action_1(fname){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(`${fname}`)
//         }, 100)
//     })
    
// }
// function action_2(lname){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(`${lname}`)
//         }, 100)
//     })
// }
// function action_3(profession){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(`${profession}`)
//         }, 100)
//     })
// }


// action_1("saksham").then(res=>{
//     console.log(res)
//     return action_2("arora")
// }) .then(res=>{
//     console.log(res);
//     return action_3("developer")
// }) .then(res=>{
//     console.log(res);
// })
// console.log('stop')

// console.log('start');
// function action_1(fname){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(`${fname}`)
//         }, 100)
//     })
    
// }
// function action_2(lname){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject(`${lname}`)
//         }, 200)
//     })
// }
// function action_3(profession){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(`${profession}`)
//         }, 1000)
//     })
// }

// Promise.any([
//     action_1("saksham"),
//     action_2("arora"),
//     action_3("develop")
// ]).then(res=>console.log(res)).catch(err=>console.error(err))

// const result= async()=>{
//     try{
//         const message1=await action_1("saksham"); console.log(message1)
        
//         const message3=await action_3("dev");console.log(message3)
//         const message2=await action_2("arora");console.log(message2)
//     }
//     catch(error){
//         console.error("promise failed",error)
//     }
// }
// result()
// console.log('stop')

// console.log("start");
// const promise1=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve(2);
//     console.log(3)
// })
// promise1.then(res=>console.log(res))
// console.log("stop")


// console.log("start");
// const fn=()=>
//     new Promise((resolve,reject)=>{
//         console.log(1);
//         resolve(2);
//         console.log(3)
//     })
//     console.log("middle")
// fn().then(res=>console.log(res))
// console.log("stop")


// console.log("start");
// const fn=(state)=>
//     new Promise((resolve,reject)=>{
//         if(state){resolve("success")}
//         else{reject("error")}
//     })

// fn(true)
//     .then(res=>{
//         console.log(res)
//         console.log(1)
//         return fn(false);   
//     })
//     .then(res=>{
//         console.log(res)
//         console.log(11)
//     })
//     .catch(err=>{
//         console.error(err)
//         console.log(2)
//         return "error found"   
//     })
//     .then(res=>{
//         console.log(res)
//         console.log(3)
//     })
// console.log("stop")

// const action_1 = new Promise((resolve,reject)=>{
//     resolve("first")
// })
// const action_2 = new Promise((resolve,reject)=>{
//     resolve(action_1)
// })
// action_2
//     .then(res=>{return res})
//     .then(res=>console.log(res))


// async function result(url){
//     // return fetch(url).then((response)=>{
//     //     if(response.status==200) console.log(response.json())
//     //     throw new Error(response.status)
//     // })
//     let response=await fetch(url);
//     if(response.status==200) console.log(await response.json())
//     throw new Error(response.status)
        
// }
// result("https://fakeurl.com/no-such-user.json").catch((err)=> console.log(err))

console.log('start');
function action_1(fname){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`${fname}`)
        }, 100)
    })
    
}
function action_2(lname){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`${lname}`)
        }, 100)
    })
}
function action_3(profession){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`${profession}`)
        }, 100)
    })
}

function promRecurse(funcPromises){
    if(funcPromises.length===0) return
    const currPromise=funcPromises.shift();
    currPromise.then(res=>console.log(res)).catch(err=>console.log(err))
    promRecurse(funcPromises)
}

promRecurse([
    action_1("saksham"),action_2("arora"),action_3("developer")
])

















// const palindrome=x=>  x<0 ? "enter a valid number": x.toString()===x.toString().split('').reverse().join('');
// console.log(palindrome(101))


// const fibo = n => n<=1 ? n : fibo(n-1)+fibo(n-2);
// console.log(fibo(10))

// const anagram = (a,b)=>a.toString().split('').sort().join()===b.toString().split('').sort().join()?true:false
// console.log(anagram("saty","asti"));

// const sumTarget=(arr,key)=>{
//     arr.sort((a,b)=>a-b);

//     let i = 0;
//     let j = arr.length-1;
//     const pairs=[];

//     while(i<j){
//         if(arr[i]+arr[j]==key){
//             pairs.push([arr[i],arr[j]]);
//             i++;j--;
//         }
//         else if (arr[i]+arr[j]==key < key) {i++;} 
//         else {j--;}
//         }
//         return pairs
//       };

// console.log(sumTarget([0,1,2,3,4,5,6,7],5))

// string 

// const countAlphabet=(str)=>{
//     let count={};
//     for(let i=0;i<str.length;i++){
//         let ch = str.charAt(i)
//         count[ch]=!count[ch] ? 1 : count[ch]+1
//     }
//     console.log(count)
// }

// const countAlphabet=(str)=>{
//     let count=str.split('').reduce((chars,i)=>{
//         chars[i]=!chars[i] ? 1 : chars[i]+1
//         return chars
//     },[])
//     console.log(count)
// }


// countAlphabet("saksham");

// filter

// const even=(n)=>{
//     let even=[],odd=[]

//     n.forEach(num => {
//         num % 2 === 0 ? even.push(num) : odd.push(num);
//     });
    
//     // even.push(n.filter(n=>n%2==0))
//     // odd.push(n.filter(n=>n%2!=0))
//     console.log("even",...even,"odd",...odd);
// }
// even([2,3,4,6,1,4])

// const mixed=(str)=>{
//     let number=[],alphabet=[];
    
//     // str.split('').forEach(ele => {
//     //     isNaN(ele)?alphabet.push(ele):number.push(ele)
//     // });

//     number.push(str.split('').filter(ele=>!isNaN(ele)))
//     alphabet.push(str.split('').filter(ele=>isNaN(ele)))


//     console.log(number.join(''),"   ",alphabet.join(""))
// }
// mixed("saksham9120hello1234")


// recursion 
// const sum=(n)=>{
//     if(n==0||n==1){return n;}
//     return n + sum(n-1)
// }
// console.log(sum(4))


// const passengers = [
//     {id: 1,passengerName: "Freddie Mercury",isVegetarianOrVegan: false,connectedFlights: 2,},
//     {id: 2,passengerName: "Amy Winehouse",isVegetarianOrVegan: true,connectedFlights: 4,},
//     {id: 3,passengerName: "Kurt Cobain",isVegetarianOrVegan: true,connectedFlights: 3,},
//     {id: 3,passengerName: "Michael Jackson",isVegetarianOrVegan: true,connectedFlights: 1,},
//   ];

// // const data =[];
// // passengers.forEach(sample=>data.push(sample.passengerName));
// // const data = passengers.map(samples=>samples.passengerName)
// const data = passengers.filter(samples=>samples.isVegetarianOrVegan).map(samples=>samples.passengerName)
// console.log(data)

