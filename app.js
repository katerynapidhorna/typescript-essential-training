let sayHi = "Hello World";
let myName = "Kate";
// tsc -w  => watch the file changes and compile them
//UNION TYPE
function totalLength(x, y) {
    let total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        //type guard syntax
        x.push("abc");
    }
    if (typeof x === "string") {
        //typeof => because string is a primitive type
        // and this syntax is only reserved for the couple the primitive types
        //I can also use an "instanceof String"
        x.substr(1);
    }
    return total;
}
function totalLength1(x, y) {
    let total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push("abc");
    }
    if (typeof x === "string") {
        x.substr(1);
    }
    return total;
}
//TYPE INFERENCE
function calculateAge(birthYear) {
    //TS knows that the type of returned value is the number
    //knowing about return type would allow TS to make better inferences about the code that caused this function
    return Date.now() - birthYear;
}
let todo = { name: "clean the house" };
const $ = function (selector) { }; //<jQuery> casting syntax to force TS to treat this function as an instance of jQuery interface
const element = $("div");
//enums
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
const toDo = {
    name: "Buy milk",
    state: TodoState.New,
};
class Animal {
    constructor(state) {
        this.state = state;
    }
    add(animal) {
        let newId = Animal.getNextId();
    }
    walk() {
        return this.state;
    }
    static getNextId() {
        return (Animal.lastId += 1);
    }
}
Animal.lastId = 0;
