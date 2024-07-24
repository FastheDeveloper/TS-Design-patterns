//Sigleton Design Patter - A CLASS HAS ONLY ONE INSTACE WHILE PROCIDING A GLOBAL ACCESS POINT TO THE INSTANCE
// Prototype Design patter - ALLOWS TO CREATE CLONES OF AN OBJECT

///Prototye

interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number,
  ) {
    super(properties);
  }
  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(
    properties: ShapeProperties,
    public radius: number,
  ) {
    super(properties);
  }
  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(clonedProperties, this.radius);
  }
}

let redTangle: Shape = new Rectangle(
  {
    x: 23,
    y: 1,
    color: "red",
  },
  12,
  44,
);

let nwotherR: Shape = redTangle.clone();
nwotherR.properties.color = "green";

console.log(redTangle);
console.log(nwotherR);

///
interface UserDetails {
  name: string;
  age: number;
  email: string;
}
interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}
  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone.user;
  }
  public getUserDetails(): UserDetails {
    return this.user;
  }
}

let user1 = new ConcretePrototype({ name: "Fas", age: 22, email: "ff" });
let user2 = user1.clone();

if (user1 === user2) {
  console.log("Not de same");
} else {
  console.log("Sperates");
}
// console.log(user2.getUserDetails());

///Prototye

///Singleton

// /When to use-
// -----When using global variables to keep data for many parts of the system but should always have the same value where ever used(USE SINGLETON)
// -------When u have an object with multiple access point but single control
// ---If code includes repeated initialisation of the same object over n over...Use singleton

// class Singleton {
//   private static instance: Singleton;
//   private static _value: number;
//   private constructor() {
//     //means this class cant be instantioated with the 'new' keyword
//   }

//   public static getInstance(): Singleton {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }
//     return Singleton.instance;
//   }

//   set value(value: number) {
//     Singleton._value = value;
//   }

//   get value() {
//     return Singleton._value;
//   }
// }

// let instance1 = Singleton.getInstance();
// let instance2 = Singleton.getInstance();
// instance1.value = 10;
// console.log(instance1.value, "fsf", instance2.value);

// console.log(instance1 === instance2); //No new instance was created

// //Singleton Logger Class
// //Log Methid
// //add multiple methods

// class Logger {
//   private static instance: Logger;
//   private static _value: string;
//   private constructor() {}

//   public static getInstance(): Logger {
//     if (!Logger.instance) {
//       console.log("Creating Instance");
//       Logger.instance = new Logger();
//     }
//     console.log("Got an Instance");

//     return Logger.instance;
//   }

//   set Loged(message: string) {
//     Logger._value = message;
//     console.log("adding ", message, " to logs");
//   }

//   get Loged() {
//     return Logger._value;
//   }

//   public log(message: string): void {
//     const timeStamp = new Date();
//     console.log(timeStamp.toLocaleString(), " - ", message);
//   }
// }

// let myLogger = Logger.getInstance();
// let urLogger = Logger.getInstance();

// myLogger.Loged = "Fight for the work";
// console.log(myLogger.Loged);

// myLogger.log("Console.log ");

// class Application {
//   constructor(private logger: Logger) {}
//   run(): void {
//     this.logger.log("The app is running");
//     this.logger.log("The app is stopping");
//   }
// }

// let logger = Logger.getInstance();
// let myApp = new Application(logger);

// myApp.run();

///Singleton
