function getCount(objects) {
  let equal = 0;
  for (let i in objects) {
      if (objects[i].x === objects[i].y) {
          equal++;
      }
  }
  return equal;
}

// testes
let objects = [ {x: 1, y: 1}, {x: 2, y:3}, {x: 3, y:3}, {x: 3, y:4}, {x: 4, y:5}];
console.log(getCount(objects)); // 2
