import { CartState } from "./cart/cart.reducer";
import { counterState } from "./counter/counter.reducer";

export interface AppState {
  counter: counterState,
  cart: CartState
}

