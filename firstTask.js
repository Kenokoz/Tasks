// First task
const arr = [1, 2, -1, 3];

function sum() {
  return this.reduce((acc,num) => acc + num, 0);
}
Array.prototype.sum = sum;

arr.sum(); // 5
console.log(arr.sum());