let sayHi: string = "Hello World";
let myName: string = "Kate";

// tsc -w  => watch the file changes and compile them

//union type
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
