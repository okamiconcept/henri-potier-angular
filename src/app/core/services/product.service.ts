import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommercialOffersResponse, Product } from '../models/ProductModel';

@Injectable()
export class ProductService {
  private apiURL = 'https://henri-potier-proxy.herokuapp.com';

  constructor(private http: HttpClient) {}

  public getProducts() {
    const route = '/books';
    return this.http.get<Product[]>(this.apiURL + route);
  }

  public getCommercialOffers(productsIds: string[]) {
    const route = `/books/${productsIds.join(',')}/commercialOffers`;
    return this.http.get<CommercialOffersResponse>(this.apiURL + route).pipe(
      map((response) => {
        return response.offers;
      })
    );
  }
}
