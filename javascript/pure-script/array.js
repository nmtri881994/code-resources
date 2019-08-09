// Remove duplicate
const array = [];
// 1. Set
[...new Set(array)];
// 2. Filter
array.filter((item, index) => array.indexOf(item) === index);
// 3. Reduce
array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);