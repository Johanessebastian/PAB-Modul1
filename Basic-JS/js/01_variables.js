console.log("------ Variables ------");
// Var
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// Var
function looping() {
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log(j); // Now it's inside the function scope
}
looping();

// Let
for (let k = 0; k < 5; k++) {
    console.log(k);
}
// console.log(k);  // This line causes an error

// Let
for (let l = 0; l < 5; l++) {
    console.log(l);
}
if (true) {
    let l = 100;
    console.log("l =", l);
}

// Let (or Var if you intend to reassign)
let phi = 3.14; // Changed from const to let
phi = 3.147; // This is valid with let
console.log(phi);