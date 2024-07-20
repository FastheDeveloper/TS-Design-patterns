//BankAccount
//Depositing
//Withdrawing
//Balance

class BankAccount {
  private _balance: number;
  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  //getter to return balance
  public get balance(): number {
    return this._balance;
  }

  //Deposit Method
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid");
      return;
    }
    this._balance += amount;
  }

  //withdraw method
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid");
      return;
    }

    if (this._balance < amount) {
      console.log("Invalid");
      return;
    }

    this._balance -= amount;
  }
}

let FasAccount = new BankAccount(500);

console.log(FasAccount.balance);
FasAccount.deposit(500);
console.log(FasAccount.balance);
FasAccount.withdraw(200);
console.log(FasAccount.balance);
