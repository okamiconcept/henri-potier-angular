import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/ProductModel';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public filteredProducts: Product[];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((response) => (this.filteredProducts = response));
  }
}
