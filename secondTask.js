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