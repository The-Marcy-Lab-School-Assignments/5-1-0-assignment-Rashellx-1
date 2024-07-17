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
    // Removing item from the instance cart based on given id
    // using splice to remove and .findindex to find the index on the item by its id.
    this.#cartItems.splice(this.#cartItems.findIndex((item) => item.id === id), 1)
  }
  getTotal() {
    return this.#cartItems.reduce((total, item) => total + item.price, 0);
    // GETTING TOTAL USING FOR LOOP BELOW:
    // let total = 0;
    // for (let i = 0; i < this.#cartItems.length; i++) {
    //   total += this.#cartItems[i].price;
    // }
    // return total;
  }
  static listAll() {
    return [...this.#allCarts]
  }

}





export default ShoppingCart;