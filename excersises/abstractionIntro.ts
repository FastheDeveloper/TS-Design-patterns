//shapes
//Calculates Area And Perimeter
//Simple-single function calculateTotalArea

//Interface of Shape

//Date Class
//Get Current Year
//Get Current Month
//Get Current Date

interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}
  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(Shape: Shape): number {
  return Shape.area();
}

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);
console.log("Area of circle", calculateTotalArea(circle));
console.log("Area of rectangle", calculateTotalArea(rectangle));
