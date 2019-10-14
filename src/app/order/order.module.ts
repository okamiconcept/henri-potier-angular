import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, OrderRoutingModule]
})
export class OrderModule {}
