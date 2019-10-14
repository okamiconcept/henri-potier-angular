import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './core/core.module';
import { OrderModule } from './order/order.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, OrderModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
