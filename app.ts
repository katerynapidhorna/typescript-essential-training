let sayHi: string = "Hello World";
let myName: string = "Kate";

// tsc -w  => watch the file changes and compile them

//UNION TYPE
function totalLength(x: string | any[], y: string | any[]): number {
  let total: number = x.length + y.length;

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

//OVERLOADED FUNCTIONS
function totalLength1(x: string, y: string): number; //simple meta data to help TS to write better code
function totalLength1(x: any[], y: any[]): number;
function totalLength1(x: string | any[], y: string | any[]): number {
  let total: number = x.length + y.length;

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
