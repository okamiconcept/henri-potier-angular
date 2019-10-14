import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/ProductModel';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()
  public product: Product;

  constructor(private orderService: OrderService) {}

  public addToOrder() {
    this.orderService.addProductToOrder(this.product, 1);
  }
}
