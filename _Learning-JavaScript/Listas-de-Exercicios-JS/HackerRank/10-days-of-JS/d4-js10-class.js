class Polygon {
  constructor(args) {
      this.args = args;
  }
  perimeter() {
      let perimeter = 0;
      for (let i = 0; i < this.args.length; i++) {
          perimeter += this.args[i];
      }
      return perimeter;
  };
}

// testes
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());