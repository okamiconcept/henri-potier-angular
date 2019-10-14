import { Component } from '@angular/core';
import { Order, OrderItem } from 'src/app/core/models/OrderModel';
import { CommercialOffer } from 'src/app/core/models/ProductModel';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public order: Order;
  public reduction: { offer: CommercialOffer; amount: number };

  constructor(private orderService: OrderService) {
    this.orderService.order.subscribe((order) => (this.order = order));

    this.orderService.getReduction().subscribe((reduction) => (this.reduction = reduction));
  }

  public changeQuantity(orderItem: OrderItem, quantity: number) {
    this.orderService.changeQuantityOrderItem(orderItem, quantity);
  }

  public deleteItem(orderItem: OrderItem) {
    this.orderService.deleteOrderItem(orderItem);
  }
}
