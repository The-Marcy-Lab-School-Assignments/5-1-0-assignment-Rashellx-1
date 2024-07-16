import getId from "../utils/getId";

class CartItem {
  constructor(name, price) {
    this.id = getId()  //invoking id method from getId js 
    this.name = name
    this.price = price
  }
}

export default CartItem;