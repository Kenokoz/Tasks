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