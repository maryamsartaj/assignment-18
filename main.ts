
let placeTovisit = ["paris", "newyork", "rome", "italy", "china"];
console.log("original order:", placeTovisit);
console.log("/n Alphabetical order:", placeTovisit.slice().sort());
console.log("original order:", placeTovisit);
console.log("reverse order:", placeTovisit.slice().sort().reverse());
console.log("original order:", placeTovisit);
console.log("reverse order changed");
placeTovisit.reverse();
console.log(placeTovisit);
console.log("original order:", placeTovisit.sort());
console.log(placeTovisit);
console.log("reverse Alphabetical order changed:", placeTovisit.sort().reverse());
console.log(placeTovisit);
