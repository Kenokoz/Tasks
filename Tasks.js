// First task
const arr = [1, 2, -1, 3];

function sum() {
  return this.reduce((acc,num) => acc + num, 0);
}
Array.prototype.sum = sum;

arr.sum(); // 5
console.log(`First task - ${arr.sum()}`);

//Second task
function isPalindrom() {
  const str = this.toLowerCase().split(' ').join('').split('');
  return str.join('') === str.reverse().join('');
}

String.prototype.isPalindrom = isPalindrom;

const str1 = 'Иди';
const str2 = 'А роза упала на лапу Азора';
const str3 = 'Человек';

str1.isPalindrom(); // true
str2.isPalindrom(); // true
str3.isPalindrom(); // false

console.log(`Second task - ${str1.isPalindrom()}`);
console.log(`Second task - ${str2.isPalindrom()}`);
console.log(`Second task - ${str3.isPalindrom()}`);

// Third task
// ES5
function HumanES5() {
}

function ManES5(name) {
  this.name = name;
}

ManES5.prototype = Object.create(HumanES5.prototype);
ManES5.prototype.constructor = HumanES5;

// ES6
class HumanES6 {
}

class ManES6 extends HumanES6 {
  constructor(name) {
    super();
    this.name = name;
  }
};

const man = new ManES6('Es6')