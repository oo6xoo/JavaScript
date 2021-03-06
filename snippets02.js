function myfun(a, b) {
    if (a === b) {
        return "Different!";
    } else {
        return "Equal!"
    }
}
console.log(myfun(10, 10));


function sum(...theArgs) {
  return theArgs.reduce((num1, num2) => {
    return num1 + num2;
  });
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));


function sum(x, y) {
    return x + y;
}

function sum(a, b){
    return a + b;
}
//sample usage
console.log(sum(1, 3));


function multiply(a, b){
    return a * b;
}
//sample usage
console.log(multiply(2, 4));


const users = [{
  id: 1,
  name: "Alex"
}, {
  id: 2,
  name: "Sam"
}];
users.forEach(user => {
  console.log(user); // an object
  console.log(user.id);
  console.log(user.name);
});

const users = [{
  id: 1,
  name: "Alex"
}, {
  id: 2,
  name: "Sam"
}];
console.log(users)

"Hello World".includes("World"); // true
"Hello World".includes("Potato"); // false

"hello".toUpperCase(); // "HELLO";

"NICe".toLowerCase(); // "nice";

function sum(a, b) {
    return a + b;
}
//sample usage
sum(1, 3);


function getNameLength(name){
    return name.length;
}
//sample usage
console.log(getNameLength("John"));
console.log(getNameLength("Argentina!"));
console.log(getNameLength("Macedonia"));


function nameInUpperCase(name){
    return name.toUpperCase();
}
//sample usage
console.log(nameInUpperCase("Jennifer"));
