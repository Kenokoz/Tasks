function func1() {
  return Promise.resolve('1');
}

function func2() {
  return Promise.resolve('2');
}

function func3(res) {
  return console.log(res);
}

console.log(func1())

// 7.1:                     
func1()                   // - промис с результатом - 1
  .then(function() {   
    return func2();       // -- func2(undefined)
  })
  .then(func3)            // --- func3(2) (2 - результат выполнения func2)
// 7.2:
func1()                   // - промис с результатом - 1
  .then(function() {   
    func2();              // -- func2(undefined), происходит вызов функции без возвращения промиса
  })
  .then(func3)            // -- func3(undefined)
// 7.3:
func1()                   // - промис с результатом - 1
  .then(func2())          // - func2(undefined), передаем в then отличное от функции, это интерпретируется как then(null)
  .then(func3)            // -- func3(1)
// 7.4:
func1()                   // - промис с результатом - 1
  .then(func2)            // -- func2(1)
  .then(func3)            // --- func3(2)