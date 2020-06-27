export class Article {
  id: number;
  name: string;
  price: number;
  amount: string;


  constructor(id: number, name: string, price: number, amount: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}
