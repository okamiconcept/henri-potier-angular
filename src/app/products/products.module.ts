import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, ProductsRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule]
})
export class ProductsModule {}
