import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { Iproduct } from '../shared/components/product-card/product.interface';
import { ProductApiService } from '../shared/services/product-api.service';
import { Store, createAction } from '@ngrx/store';
import { addToCart } from '../state/cart/cart.action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productApi= inject(ProductApiService)
  products$ = this.productApi.getProducts() as Observable<Iproduct[]>;
  constructor(private store:Store<{cart:{products:Iproduct[]}}>) {    
  }
  
  ngOnInit() {

  }
  addToCart(product:Iproduct) {
    this.store.dispatch(addToCart({product}));
  }
}
