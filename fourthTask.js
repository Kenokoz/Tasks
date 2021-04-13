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
  console.log(this.a);
  return this;
}

const obj = {
	a: 0
};

obj.add = add;
obj.dec = dec;
obj.showResult = showResult;

obj.add().add().dec().add().showResult(); // 2

