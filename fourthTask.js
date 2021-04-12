//Fourth task
function add() {
  return this.a === 0 || this.a ? ++this.a : this + 1;
}

function dec() {
  return this.a === 0 || this.a ? --this.a : this - 1
}


Number.prototype.add = add;
Object.prototype.add = add;

Number.prototype.dec = dec;
Object.prototype.dec = dec;

const obj = {
	a: 0
};

// obj.add().add().dec().add(); // 2

console.log(obj.add().add().dec().add()); // 2