//Fourth task
let num = 0;

function add() {
  if (this.a === 0)
    return num = this.a + 1;
  else
    return num += 1;
}

function dec() {
  if (this.a === 0)
    return num = this.a - 1;
  else
    return num -= 1;
}


Number.prototype.add = add;
Object.prototype.add = add;

Number.prototype.dec = dec;
Object.prototype.dec = dec;

const obj = {
	a: 0
};

obj.add().add().dec().add(); // 2

console.log(obj.add().add().dec().add());