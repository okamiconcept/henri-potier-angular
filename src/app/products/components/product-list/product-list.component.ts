import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { Product } from 'src/app/core/models/ProductModel';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('* <=> *', [
        query(':enter', [style({ opacity: 0 }), stagger('100ms', animate('550ms ease-out', style({ opacity: 1 })))], { optional: true }),
        query(':leave', animate('200ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class ProductListComponent implements OnDestroy {
  public filteredProducts: Product[];
  public searchForm: FormGroup;
  public loading = true;
  private productsSubscription: Subscription;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      text: ''
    });

    const searchText$ = this.searchForm.get('text').valueChanges.pipe(distinctUntilChanged());

    const products$ = this.productService.getProducts();

    this.productsSubscription = combineLatest(searchText$, products$)
      .pipe(tap(() => (this.loading = true)))
      .subscribe(([searchText, response]: [string, Product[]]) => {
        this.filteredProducts = searchText ? response.filter((product) => product.title.includes(searchText)) : response;
        this.loading = false;
      });

    this.searchForm.get('text').setValue('');
  }

  public ngOnDestroy() {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
