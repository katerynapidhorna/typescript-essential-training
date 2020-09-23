let sayHi = "Hello World";
let myName = "Kate";
// tsc -w  => watch the file changes and compile them
//union type
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
