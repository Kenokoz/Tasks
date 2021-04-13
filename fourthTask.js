//Fourth task
function add() {
  obj.a++;
  return obj;
}

function dec() {
  obj.a--;
  return obj;
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
