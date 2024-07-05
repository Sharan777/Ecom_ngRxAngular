import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../shared/components/product-card/product.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectCartProducts, totalPrice } from '../state/cart/cart.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { decrementProduct, incrementProduct, removeProduct } from '../state/cart/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone:true,
  imports:[CommonModule, AsyncPipe],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // cartItems$ = this.store.select(selectCartProducts);

  // constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }
  cartItems$ = this.store.select(selectCartProducts);
  totalPrice$ = this.store.select(totalPrice);
  
  //cartStore = inject(CartStore);
  constructor(private store: Store<AppState>) {}

  remove(productId: number) {
    this.store.dispatch(removeProduct({ productId }));
  }

  increment(productId: number) {
    this.store.dispatch(incrementProduct({ productId }));
  }
  decrement(productId: number) {
    this.store.dispatch(decrementProduct({ productId }));
  }

  // decrement(productId: number, quantity: number) {
  //   if (quantity === 1) {
  //     this.cartStore.removeItem(productId);
  //   } else {
  //     this.cartStore.decrement(productId);
  //   }
  //   //this.store.dispatch(decrementProduct({ productId }));
  // }

}
