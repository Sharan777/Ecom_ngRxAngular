import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from './product.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Iproduct;
  @Output() handleAdd = new EventEmitter();
  constructor() {

  }

  addToCart(item:Iproduct) {
    this.handleAdd.emit(item);
  }

}
