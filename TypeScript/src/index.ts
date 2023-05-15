// types
let id: number = 5;
let company: string = 'Traversy Media';
let isDone: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5]; //add brackets to show its an array of only number
let arr: any[] = [1, 'two', true];

// Tuple
let person: [number, string, boolean] = [1, 'Mike', true];

//T uple Array
let employee: [number, string][];
employee = [
  [1, 'Mike'],
  [2, 'Steve'],
];

// Union (variable to hold more than one type)
let myId: string | number = 22;
myId = 'twenty';

// Enum (allow us to define a set of named constants, either numeric or string)

// By default have values of 0,1,2,3
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
// setting values changes the order they go up 1,2,3,4
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}
// Can also set these to strings
enum Direction3 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects

type User = {
  id: number;
  name: string;
};

let user: {
  id: number;
  name: string;
};

user = {
  id: 1,
  name: 'Mike',
};

const user2: User = {
  id: 2,
  name: 'Steve',
};

// Type Assertion
// exclusively telling the compiler that we want to treat an entity as a different type
let cid: any = 1;
let customerId = <number>cid; //kinda like casting

let customerID = cid as number; // another way

// Functions
// need to give functions a type can disable implicit any
// set the return type in the end
function addNum(x: number, y: number): number {
  return x + y;
}
// set return to void and use union in
function log(message: string | number): void {
  console.log(message);
}

// Interface
// is a custom type or specific structure to an object or function
interface UserInterface {
  id: number;
  name: string;
}

// interface is good for describing objects over a type
//A type can be used with primitives and unions, interface cannot
let userNew: UserInterface = {
  id: 1,
  name: 'Mike',
};

// Can also have optional properties or read only properties

interface UserInterfaceOpt {
  readonly id: number;
  name: string;
  age?: number;
}

// age does not raise an error
// also cant assign anything to id
let newUser: UserInterface = {
  id: 1,
  name: 'Mike',
};

// can also use interface with functions

interface MathFun {
  (x: number, y: number): number;
}

const add: MathFun = (x: number, y: number): number => x + y;
const sub: MathFun = (x: number, y: number): number => x - y;

// can implement an interface to a class as well
// need to add implements keyword after class

interface personaInterface {
  id: number;
  name: string;
  form: number;
  enrolled: boolean;
  register(): string;
}

// Classes
// Data modifiers used to change properties in classes to public and protected.
class Persona implements personaInterface {
  id: number; // can add private before id - only be accessed within class
  name: string; // can also add protected before name only access it within this class or any class thats extended from it
  form: number;
  enrolled: boolean;

  constructor(id: number, name: string, form: number, enrolled: boolean) {
    this.id = id;
    this.name = name;
    this.form = form;
    this.enrolled = enrolled;
  }

  register(): string {
    return `${this.name} is registered`;
  }
}

const mike = new Persona(1, 'mike', 4, true);

// extending classes
// Sub classes
class Employee extends Persona {
  position: string;

  constructor(
    id: number,
    name: string,
    form: number,
    enrolled: boolean,
    position: string
  ) {
    super(id, name, form, enrolled); // pass them through rather than doing this
    this.position = position;
  }
}

const emp = new Employee(1, 'mike', 4, true, 'developer');

// Generics - reusable components
// instead of adding any can use generic as a placeholder and define a type later
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

// can add a generic to create an array that has to have numbers
let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(['mike', 'steve']);

// using typescript with react

export interface Props {
  title: string;
  color?: string;
}

// const Header = (props: Props) =>{
//     return(
//         <header>
//         <p style={{color: props.color ? props.color : 'blue'}}>
//             {props.title}
//         </p>
//         </header>
//     )
// }
