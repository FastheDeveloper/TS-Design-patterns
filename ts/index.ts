//S - SINGLE RESPONSIBILITY PRINCIPLE ( A CLASS SHOULD ONLY DO ONE THING)
//O - OPEN CLOSE PRINCIPLE (A CLASS SHOULD BE OPEN TO EXTENSION BUT CLOSED TO MODIFICATION)
//L -  LISKOV SUBSTITITION PRINCIPLE ( IF S IS A SUBSTYPE OF T, THEN OBJECT OF THE TYPE T IN A PROGRAM MAY BE REPLACED WITH OBJECT OF TYPE S WITHOUT ALTWERING ANY OF THE DESIRABLE PROPERTIES OF THAT PROGRAM)

// abstract class Shape {
//   abstract calculateArea(): number;
// }

// class Rectangle extends Shape {
//   constructor(
//     public width: number,
//     public height: number,
//   ) {
//     super();
//   }
//   public calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// class Square extends Shape {
//   constructor(public width: number) {
//     super();
//   }
//   public calculateArea(): number {
//     return this.width * this.width;
//   }
// }

// function area(shape: Shape) {
//   //This is expecting SHAPE a parent class
//   return shape.calculateArea();
// }

// const rect = new Rectangle(4, 5);
// const squa = new Square(5);

// area(rect); //but we are using it with a child class instead...LISKOV

//IMPLEMENTATION
// CREATE A PAYMENT PROCESSOR
// PROCESS CREDIT CARD
//  /DEBIT CARD
// PAYPAL
abstract class Payment {
  abstract debitCustomer(amount: number): number;
}

class CreditCard extends Payment {
  debitCustomer(amount: number): number {
    let tax = 10;
    return amount + tax;
  }
}

class DebitCard extends Payment {
  debitCustomer(amount: number): number {
    let tax = 20;
    return amount + tax;
  }
}

class PayPal extends Payment {
  debitCustomer(amount: number): number {
    let tax = 12;
    return amount + tax;
  }
}

function makePayment(paymentMethod: Payment, amount: number) {
  return paymentMethod.debitCustomer(amount);
}

const newCustomer = new CreditCard();

console.log(makePayment(newCustomer, 3000));

//L Closed

// WRONG WAY OF CREATING A DISCOUNT CALCULATOR CUS WHAT IF I WANT TO ADD MORE CUSTOMER TYPES
// TYPES I HAVE RN
// REGULARS - 10% DISCOUNT
// PREMIUM -  20% DISCOUNT

// class Discount{
//     giveDiscount(customerType:"premium"|"regular"):number{
//         if(customerType==='premium'){
//             return 20
//         }else if(customerType==='regular'){
//             return 10
//         }else{
//             return 0
//         }
//     }
// }

//RIGHT NOW OPEN-CLOSED
// interface Customer {
//   giveDiscount(): number;
//   addLoyaltyPoints(amountSpent: number): number;
// }

// class RegularCustomer implements Customer {
//   giveDiscount(): number {
//     console.log("10");

//     return 10;
//   }
//   addLoyaltyPoints(amountSpent: number): number {
//     return amountSpent;
//   }
// }

// class PremiumCustomer implements Customer {
//   giveDiscount(): number {
//     console.log("20");
//     return 20;
//   }

//   addLoyaltyPoints(amountSpent: number): number {
//     return amountSpent * 1.4;
//   }
// }

// class GoldCustomer implements Customer {
//   giveDiscount(): number {
//     console.log("50");
//     return 500;
//   }
//   addLoyaltyPoints(amountSpent: number): number {
//     return amountSpent * 2;
//   }
// }

// class DiscountOuter {
//   giveDiscount(customer: Customer) {
//     return customer.giveDiscount();
//   }
//   addLoyaltyPoints(amountSpent: number): number {
//     return amountSpent * 3;
//   }
// }

// const Fas: PremiumCustomer = new PremiumCustomer();
// const calcDiscount: DiscountOuter = new DiscountOuter();
// calcDiscount.giveDiscount(Fas);

// OPEN-CLOSED ABOVE

//S IS BELOW
// class BlogPost {
//   title: string;
//   content: string;
//   isAnonymous?: boolean;

//   constructor(title: string, content: string, isAnonymous?: boolean) {
//     this.title = title;
//     this.content = content;
//     this.isAnonymous = isAnonymous;
//   }

//   createPost() {
//     console.log("Blog post Created");
//   }

//   updatePost() {
//     console.log("Post is updated");
//   }

//   deletePost() {
//     console.log("Post Is deleted");
//   }
// }

// class BlogDisplayer {
//   constructor(public blogPost: BlogPost) {}

//   display() {
//     console.log(
//       `${this.blogPost.title} is a blog wit thoe commet: ${this.blogPost.content} `,
//     );
//     return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}`;
//   }
// }

// const myBlog = new BlogPost("The fas Blog", "fas was a blogger");
// const myDisplayer = new BlogDisplayer(myBlog);
// myDisplayer.display();

// //S IS ABOVE
