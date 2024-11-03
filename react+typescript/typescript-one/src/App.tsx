import './App.css';


// // types in typescript

// let name: string;
// let age: number | string ; // union type , can assign two data type 
// let isStudemt: boolean;
// let hobbies: string[]

//   // tuples
// let role: [number, string] // only contains one number and string 
// // example

// role = [5, 'mobile'] // can't add any other type other than decided

// // way to create object 
// // type
// type Person = { 
//   name: string;
//   age: number;
//   city?:string //optional parameters
// }

// let person: Person = {
//   name: 'vishal',
//   age:23
// }

// // assign a type as array to variable
// let lotsofPeople:Person[] // array of person object

// // name = 5; // this will give error 

// name = 'omkar';

// // declare function type
// let printName: (name: string) => void; // can use never instead of void , void returns undefined and never returns 
// // didn't return anything , so used void . otherwise can use any data type like string , number , boolean 


// // optional thing for any
// let personName: unknown; // later we cam provide any name 

// // interface
// interface PersonOne  { 
//   name: string;
//   age: number;
//   city?:string //optional parameters
// }

// interface Candidate extends PersonOne {
//   name: 'vishal';
//   age: 23;
//   city:'kolhapur'
// }

// type X = {
//   a: string;
//   b:number
// }

// type Y = X & { // this can use now peoperty of X as well
//   c: string;
//   d:number
// }




function App() {
  return (
    <div className="App">
  hello world
    </div>
  );
}

export default App;
