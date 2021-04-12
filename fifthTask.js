// Fifth task
function sum(firstNum = 0) {
  let result = firstNum;

  const add = (secondNum = 0) => {
    result += secondNum;
    return add;
  }

  add.toString = () => result // Переопределяем метод toString

  return add;
}

sum(1)(2)(3); //6

console.log(+sum(1)(2)(3)); // 6


