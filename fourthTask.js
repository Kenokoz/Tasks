//Fourth task
function add() {
  this.a++;
  return this;
}

function dec() {
  this.a--;
  return this;
}

function showResult() {
  console.log(obj.a);
}

Object.prototype.add = add;
Object.prototype.dec = dec;

const obj = {
	a: 0
};

obj.add().add().dec().add(); // 2

showResult();
