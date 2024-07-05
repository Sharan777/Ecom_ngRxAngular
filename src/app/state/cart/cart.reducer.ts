import { createReducer, on } from "@ngrx/store";
import { Iproduct } from "../../shared/components/product-card/product.interface";
import * as cartAction from "./cart.action";


export interface CartState {
  products: Iproduct[];
  totalPrice?: number

}
export const initiateCartState : CartState = {
  products:[],
  totalPrice: 0,
}
export function calculateTotalPrice(products:Iproduct[]) {
  return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  

}
export const cartReducer = createReducer(
  initiateCartState, 
  on(cartAction.addToCart, (state, {product}) => {
    const updateProducts = [...state.products, product]
    return {
      ...state,
      products:updateProducts,
      totalPrice:calculateTotalPrice(updateProducts),

    }
  }),
  on(cartAction.incrementProduct, (state, {productId} ) => {
    const updateProducts = state.products.map((product)=> 
      product.id === productId? {...product, quantity:product.quantity+1}:product );
    return {
      ...state,
      products : updateProducts,
      totalPrice:calculateTotalPrice(updateProducts),
    }
  }),

  on(cartAction.decrementProduct, (state, {productId} ) => {
    const updateProducts = state.products.map((product)=> 
      product.id === productId? {...product, quantity:product.quantity-1}:product
    );
    return {
      ...state,
      products:updateProducts,
      totalPrice:calculateTotalPrice(updateProducts),
    }
  }),
  on(cartAction.removeProduct, (state, {productId})=>  {
    const updateProducts = state.products.filter((product)=> product.id !== productId);
    return {
      ...state,
      products: updateProducts,
      totalPrice: calculateTotalPrice(updateProducts),
    }
  }   
  )
);