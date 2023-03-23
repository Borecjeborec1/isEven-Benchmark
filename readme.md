# Results of multiple ways to Check if a Number is Even

### Introduction
This is a benchmark of several ways to check if a number is even in JavaScript. The benchmark is based on running each function a million times and measuring the time it takes to complete.

### Results
Here are the results of the benchmark:

|Function	|Time (ms)|
--- | --- | ---
|isEven1|	13374.717|
|isEven2|	5.119|
|isEven3|	4.345|
|isEven4|	3.854|
|isEven5|	4.161|
|isEven6|	95772.876|
|isEven7|	3.93|
|isEven8|	70815.804|
|isEven9|	188.31|
|isEven10|	269.971|
|isEven11|	84.433|
|isEven12|	153.679|

### One by One

Time in ms for 1_000_000 elements: **13374.717**ms
```javascript
function isEven1(x) {
  while (x > 1) {
    x -= 2
  }
  if (x == 0) return true
  return false
}
```

Time in ms for 1_000_000 elements: **5.119**ms
```javascript
function isEven2(x) {
  if (x % 2 == 0) return true
  return false
}
```

Time in ms for 1_000_000 elements: **4.345**ms
```javascript
function isEven3(x) {
  return ~x & 1
}
```

Time in ms for 1_000_000 elements: **3.854**ms
```javascript
function isEven4(x) {
  return x >> 1 << 1 == x;
}
```

Time in ms for 1_000_000 elements: **4.161**ms
```javascript
function isEven5(x) {
  return x % 2 == 0
}
```

Time in ms for 1_000_000 elements: **95.772**ms
```javascript
function isEven6(x) {
  return /[02468]$/.test(x)
}
```

Time in ms for 1_000_000 elements: **3.93**ms
```javascript
function isEven7(x) {
  return !(x & 1);
}
```

Time in ms for 1_000_000 elements: **70.816**ms
```javascript
function isEven8(x) {
  return ["0", "2", "4", "6", "8"].includes(x.toString().slice(-1));
}
```

Time in ms for 1_000_000 elements: **188.31**ms
```javascript
function isEven9(x) {
  return 1 - x.toString().charAt(x.toString().length - 1).replace(/[2468]/, "0").replace(/[3579]/, "1")
}
```

Time in ms for 1_000_000 elements: **269.971**ms
```javascript
function isEven10(x) {
  return (x >>> 0).toString(2).endsWith("0")
}
```

Time in ms for 1_000_000 elements: **84.433**ms
```javascript
function isEven11(x) {
  return [...x.toString()].pop() % 2 === 0;
}
```

Time in ms for 1_000_000 elements: **153.679**ms
```javascript
function isEven12(x) {
  return x.toString().split("").reverse()[0] % 2 === 0;
}
```