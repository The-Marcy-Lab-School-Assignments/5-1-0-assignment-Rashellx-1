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
    const newItem = new CartItem(name, price) // create a variable to hold the newItem
    console.log(newItem)
    this.#cartItems.push(newItem) // adding this new item in #cartItems array directly
    return newItem                // returing the newItem
  }
  getItems() {
    return [...this.#cartItems] //creating shallow copy of #cartItems array
  }
  removeItem(id) {
    this.#cartItems.splice(this.#cartItems.findIndex((item) => item.id === id), 1)
  }

}

export default ShoppingCart;