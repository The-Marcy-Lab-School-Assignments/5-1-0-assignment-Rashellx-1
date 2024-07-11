import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  #cartItems = []
  constructor(id, cartItems) {
    this.id = id
    this.#cartItems = cartItems
  }
  createItem(name, price) {
    this.name = name
    this.price = price
  }
  getItems() {
    return [...this.#cartItems]
  }
}

export default ShoppingCart;