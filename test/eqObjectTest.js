const eqObjects = require('../eqObjects');

//array test
console.log('array test');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log('----');
eqObjects(cd, cd2); // => false