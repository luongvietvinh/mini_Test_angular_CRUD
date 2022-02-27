export class Tuor{
  id!: number;
  name!:string;
  price!:number;
  status!:number;
  description!:string;


  constructor(id: number, name: string, price: number, status: number, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.status = status;
    this.description = description;
  }
}
