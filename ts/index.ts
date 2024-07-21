// Polymorphisim ↓ ↓ ↓ ↓ ↓ ↓

// Polymorphisim↑↑↑↑↑↑↑↑↑

// Encapsulation↓ ↓ ↓ ↓ ↓ ↓ ↓
//BankAccount
//Depositing
//Withdrawing
//Balance

// class BankAccount {
//   private _balance: number;
//   constructor(initialBalance: number) {
//     this._balance = initialBalance;
//   }

//   //getter to return balance
//   public get balance(): number {
//     return this._balance;
//   }

//   //Deposit Method
//   public deposit(amount: number): void {
//     if (amount < 0) {
//       console.log("Invalid");
//       return;
//     }
//     this._balance += amount;
//   }

//   //withdraw method
//   public withdraw(amount: number): void {
//     if (amount < 0) {
//       console.log("Invalid");
//       return;
//     }

//     if (this._balance < amount) {
//       console.log("Invalid");
//       return;
//     }

//     this._balance -= amount;
//   }
// }

// let FasAccount = new BankAccount(500);

// console.log(FasAccount.balance);
// FasAccount.deposit(500);
// console.log(FasAccount.balance);
// FasAccount.withdraw(200);
// console.log(FasAccount.balance);

// Encapsulation↑↑↑↑↑↑↑↑↑

//
//
//
//
//
//
//
//
//

// ABSTRACTION ↓ ↓ ↓ ↓ ↓ ↓ ↓
// // //shapes
// //Calculates Area And Perimeter
// //Simple-single function calculateTotalArea

// //Interface of Shape

// //Date Class
// //Get Current Year
// //Get Current Month
// //Get Current Date

// const now = new Date();

// const currentYear = now.getFullYear();
// const currentMonth = now.getMonth() + 1;
// const currentDate = now.getDate();

// console.log(currentYear);
// console.log(currentMonth);
// console.log(currentDate);

// //shapes
// //Calculates Area And Perimeter
// //Simple-single function calculateTotalArea

// //Interface of Shape

// //Date Class
// //Get Current Year
// //Get Current Month
// //Get Current Date

// interface Shape {
//   area(): number;
//   perimeter(): number;
// }

// class Circle implements Shape {
//   constructor(private radius: number) {}
//   area(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   perimeter(): number {
//     return 2 * Math.PI * this.radius;
//   }
// }

// class Rectangle implements Shape {
//   constructor(
//     private width: number,
//     private height: number,
//   ) {}
//   area(): number {
//     return this.width * this.height;
//   }

//   perimeter(): number {
//     return 2 * (this.width + this.height);
//   }
// }

// function calculateTotalArea(Shape: Shape): number {
//   return Shape.area();
// }

// function calculatePerimeter(Shape: Shape): number {
//   return Shape.perimeter();
// }
// let circle: Circle = new Circle(5);
// let rectangle: Rectangle = new Rectangle(4, 6);
// console.log("Area of circle", calculateTotalArea(circle));
// console.log("Area of rectangle", calculateTotalArea(rectangle));
// console.log("Perimeter of circle", calculatePerimeter(circle));
// console.log("Perimeter of rectangle", calculatePerimeter(rectangle));

// ABSTRACTION↑↑↑↑↑↑↑↑↑
