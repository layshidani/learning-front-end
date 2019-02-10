/* Task
* Complete the function in the editor. It has two parameters:  a and b. 
* It must return an object modeling a rectangle that has the following properties:
* length, width, perimeter, area 
*/

function Rectangle(a, b) {
  let length = a;
  let width = b;
  let perimeter = 2 * (length + width);
  let area = length * width;
  let rec = {
      length: length,
      width: width,
      perimeter: perimeter,
      area: area
  }
  return rec;
}


// Test
console.log(Rectangle(4, 5));