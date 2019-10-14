import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { StorageService } from './services/storage.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ProductService, OrderService, StorageService]
})
export class CoreModule {}
