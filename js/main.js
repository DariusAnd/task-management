// import sum from './sum.js';
// import sumatorius from './sum.js';

import { sum, minus } from './sum.js';
import { multi } from './sum.js';

console.log('Labas');

const n1 = 5;
const n2 = 7;

// const n12 = sum(n1, n2);
// const n12 = sumatorius(n1, n2);

const n12 = sum(n1, n2);
const n12minus = minus(n1, n2);
const n12multi = multi(n1, n2);

console.log(n12);
console.log(n12minus);
console.log(n12multi);