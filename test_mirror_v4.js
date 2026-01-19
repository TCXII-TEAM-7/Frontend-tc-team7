// Testing updated algorithm A_mirror with input 29283

let A = 29283;
let temp = A;
let deg = 0;
let MA = 0;

console.log("Input A:", A);
console.log("Initial values: temp =", temp, ", deg =", deg, ", MA =", MA);

// First while loop - count the digits
console.log("\n--- First Loop (Counting Digits) ---");
while (temp > 0) {
    temp = Math.floor(temp / 10);
    deg = deg + 1;
    console.log(`temp = ${temp}, deg = ${deg}`);
}

console.log(`\nAfter counting: deg = ${deg} (number of digits)`);

// For loop - calculate mirror (UPDATED: deg-n-1 instead of deg-n)
console.log("\n--- For Loop (Building Mirror) ---");
for (let n = 0; n <= deg - 1; n++) {
    let extracted = A % (10 ** (n + 1));
    let shifted = extracted * (10 ** (deg - n - 1));
    temp = shifted;
    MA = temp + MA;
    console.log(`n = ${n}: (${A} mod 10^${n+1}) * 10^${deg-n-1} = ${extracted} * ${10**(deg-n-1)} = ${shifted}, MA = ${MA}`);
    deg = deg - 1;
}

console.log(`\nFinal result: The Mirror of ${A} is ${MA}`);
