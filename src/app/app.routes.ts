import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'products',
    pathMatch: 'full'
  },

  {
    path:'counter',
    loadComponent: () => import('./counter/counter.component').then((_)=>_.CounterComponent),
  },
  {
    path:'products',
    loadComponent: () => import('./products/products.component').then((_)=>_.ProductsComponent),
  },
  {
    path:'cart',
    loadComponent: () => import('./cart/cart.component').then((_)=>_.CartComponent),
  }
];
