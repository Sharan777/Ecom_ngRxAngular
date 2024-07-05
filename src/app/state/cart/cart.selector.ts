import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "./cart.reducer";

export const selectCartState = (state:AppState) => state.cart;

export const selectCartProducts = createSelector(
  selectCartState, 
  (state: CartState)=> state.products
);

  export const totalPrice = createSelector(
    selectCartState, 
    (state: CartState)=> state.totalPrice
  );