import { Component } from '@angular/core';
import { Order } from '../../core/models/OrderModel';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public order: Order;

  constructor(private orderService: OrderService) {
    this.orderService.order.subscribe((o) => (this.order = o));
  }
}
