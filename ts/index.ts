//Sigleton Design Patter - A CLASS HAS ONLY ONE INSTACE WHILE PROCIDING A GLOBAL ACCESS POINT TO THE INSTANCE

// /When to use-
// -----When using global variables to keep data for many parts of the system but should always have the same value where ever used(USE SINGLETON)
// -------When u have an object with multiple access point but single control
// ---If code includes repeated initialisation of the same object over n over...Use singleton

class Singleton {
  private static instance: Singleton;
  private static _value: number;
  private constructor() {
    //means this class cant be instantioated with the 'new' keyword
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
instance1.value = 10;
console.log(instance1.value, "fsf", instance2.value);

console.log(instance1 === instance2); //No new instance was created

//Singleton Logger Class
//Log Methid
//add multiple methods

class Logger {
  private static instance: Logger;
  private static _value: string;
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      console.log("Creating Instance");
      Logger.instance = new Logger();
    }
    console.log("Got an Instance");

    return Logger.instance;
  }

  set Loged(message: string) {
    Logger._value = message;
    console.log("adding ", message, " to logs");
  }

  get Loged() {
    return Logger._value;
  }

  public log(message: string): void {
    const timeStamp = new Date();
    console.log(timeStamp.toLocaleString(), " - ", message);
  }
}

let myLogger = Logger.getInstance();
let urLogger = Logger.getInstance();

myLogger.Loged = "Fight for the work";
console.log(myLogger.Loged);

myLogger.log("Console.log ");

class Application {
  constructor(private logger: Logger) {}
  run(): void {
    this.logger.log("The app is running");
    this.logger.log("The app is stopping");
  }
}

let logger = Logger.getInstance();
let myApp = new Application(logger);

myApp.run();
