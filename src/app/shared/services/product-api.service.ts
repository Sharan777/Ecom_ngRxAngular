import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { Iproduct } from '../components/product-card/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
http = inject(HttpClient)
constructor() { }

getProducts() {
  return this.http.get<Iproduct[]>('https://fakestoreapi.com/products').pipe(
    map(((products)=> {
      return products.map((product)=> {
        return {...product, quantity:1}
      });
    }))
  )
}

}
