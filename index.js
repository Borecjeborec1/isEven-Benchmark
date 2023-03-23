const CAP = 1_000_000
function isEven1(x) {
  while (x > 1) {
    x -= 2
  }
  if (x == 0) return true
  return false
}

function isEven2(x) {
  if (x % 2 == 0) return true
  return false
}

function isEven3(x) {
  return ~x & 1
}

function isEven4(x) {
  return x >> 1 << 1 == x;
}

function isEven5(x) {
  return x % 2 == 0
}

function isEven6(x) {
  return /[02468]$/.test(x)
}

function isEven7(x) {
  return !(x & 1);
}

function isEven8(x) {
  return ["0", "2", "4", "6", "8"].includes(x.toString().slice(-1));
}

function isEven9(x) {
  return 1 - x.toString().charAt(x.toString().length - 1).replace(/[2468]/, "0").replace(/[3579]/, "1")
}

function isEven10(x) {
  return (x >>> 0).toString(2).endsWith("0")
}

function isEven11(x) {
  return [...x.toString()].pop() % 2 === 0;
}

function isEven12(x) {
  return x.toString().split("").reverse()[0] % 2 === 0;
}


console.time("isEven1")
for (let i = 0; i < CAP; ++i) {
  isEven1(i)
}
console.timeEnd("isEven1")

console.time("isEven2")
for (let i = 0; i < CAP; ++i) {
  isEven2(i)
}
console.timeEnd("isEven2")

console.time("isEven3")
for (let i = 0; i < CAP; ++i) {
  isEven3(i)
}
console.timeEnd("isEven3")

console.time("isEven4")
for (let i = 0; i < CAP; ++i) {
  isEven4(i)
}
console.timeEnd("isEven4")

console.time("isEven5")
for (let i = 0; i < CAP; ++i) {
  isEven5(i)
}
console.timeEnd("isEven5")

console.time("isEven6")
for (let i = 0; i < CAP; ++i) {
  isEven6(i)
}
console.timeEnd("isEven6")

console.time("isEven7")
for (let i = 0; i < CAP; ++i) {
  isEven7(i)
}
console.timeEnd("isEven7")

console.time("isEven8")
for (let i = 0; i < CAP; ++i) {
  isEven8(i)
}
console.timeEnd("isEven8")

console.time("isEven9")
for (let i = 0; i < CAP; ++i) {
  isEven9(i)
}
console.timeEnd("isEven9")

console.time("isEven10")
for (let i = 0; i < CAP; ++i) {
  isEven10(i)
}
console.timeEnd("isEven10")

console.time("isEven11")
for (let i = 0; i < CAP; ++i) {
  isEven11(i)
}
console.timeEnd("isEven11")

console.time("isEven12")
for (let i = 0; i < CAP; ++i) {
  isEven12(i)
}
console.timeEnd("isEven12")