import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent} from './counter/counter.component'
import { ProductsComponent } from './products/products.component';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { Observable } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { selectCount } from './state/counter/counter.selector';
import { Iproduct } from './shared/components/product-card/product.interface';
import { selectCartProducts } from './state/cart/cart.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CounterComponent, ProductsComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-counter';
  cart$:Observable<number>;
  products$: Observable<Iproduct[]>
  constructor(private store: Store<AppState>) {
    this.cart$ = store.select(selectCount);
    this.products$ = store.select(selectCartProducts)
    
  }
}
