// types
let id = 5;
let company = 'Traversy Media';
let isDone = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5]; //add brackets to show its an array of only number
let arr = [1, 'two', true];
// Tuple
let person = [1, 'Mike', true];
//T uple Array
let employee;
employee = [
    [1, 'Mike'],
    [2, 'Steve'],
];
// Union (variable to hold more than one type)
let myId = 22;
myId = 'twenty';
// Enum (allow us to define a set of named constants, either numeric or string)
// By default have values of 0,1,2,3
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// setting values changes the order they go up 1,2,3,4
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// Can also set these to strings
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
let user;
user = {
    id: 1,
    name: 'Mike',
};
const user2 = {
    id: 2,
    name: 'Steve',
};
// Type Assertion
// exclusively telling the compiler that we want to treat an entity as a different type
let cid = 1;
let customerId = cid; //kinda like casting
let customerID = cid; // another way
// Functions
// need to give functions a type can disable implicit any
// set the return type in the end
function addNum(x, y) {
    return x + y;
}
// set return to void and use union in
function log(message) {
    console.log(message);
}
// interface is good for describing objects over a type
//A type can be used with primitives and unions, interface cannot
let userNew = {
    id: 1,
    name: 'Mike',
};
// age does not raise an error
// also cant assign anything to id
let newUser = {
    id: 1,
    name: 'Mike',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
// Data modifiers used to change properties in classes to public and protected.
class Persona {
    constructor(id, name, form, enrolled) {
        this.id = id;
        this.name = name;
        this.form = form;
        this.enrolled = enrolled;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const mike = new Persona(1, 'mike', 4, true);
// extending classes
// Sub classes
class Employee extends Persona {
    constructor(id, name, form, enrolled, position) {
        super(id, name, form, enrolled); // pass them through rather than doing this
        this.position = position;
    }
}
const emp = new Employee(1, 'mike', 4, true, 'developer');
// Generics - reusable components
// instead of adding any can use generic as a placeholder and define a type later
function getArray(items) {
    return new Array().concat(items);
}
// can add a generic to create an array that has to have numbers
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['mike', 'steve']);
export {};
// const Header = (props: Props) =>{
//     return(
//         <header>
//         <p style={{color: props.color ? props.color : 'blue'}}>
//             {props.title}
//         </p>
//         </header>
//     )
// }
