import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  #cartItems
  static #allCarts = []
  constructor() {
    this.id = getId()
    this.#cartItems = []
  }
  createItem(name, price) {
    const newItem = new CartItem(name, price)
    console.log(newItem)
    this.#cartItems.push(newItem)
    return newItem
  }
  getItems() {
    return [...this.#cartItems]
  }
  removeItem(id) {
    this.#cartItems.splice(id)
  }

}

export default ShoppingCart;