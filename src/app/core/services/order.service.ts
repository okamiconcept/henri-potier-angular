import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Order, OrderItem } from '../models/OrderModel';
import { CommercialOffer, Product } from '../models/ProductModel';
import { ProductService } from './product.service';
import { StorageService } from './storage.service';

@Injectable()
export class OrderService {
  public order = new BehaviorSubject<Order>({
    count: 0,
    total: 0,
    items: []
  });

  constructor(private productService: ProductService, private storage: StorageService) {
    if (this.storage.get('order')) {
      this.order.next(this.storage.get('order'));
    }

    this.order.subscribe((order) => {
      this.storage.set('order', order);
    });
  }

  public getReduction() {
    return this.order.pipe(
      filter((order) => order.count > 0),
      distinctUntilChanged((prevOrder, order) => prevOrder.count === order.count),
      concatMap((order) => {
        return this.productService
          .getCommercialOffers(order.items.map((orderItem) => orderItem.product.isbn))
          .pipe(map((offers) => ({ order, offers })));
      }),
      map(({ order, offers }) => {
        return this.calculateBestReduction(order, offers);
      })
    );
  }

  public addProductToOrder(product: Product, quantity: number) {
    const currentOrder = this.order.getValue();

    const productInOrder = currentOrder.items.find((orderItem) => orderItem.product.isbn === product.isbn);

    if (productInOrder) {
      productInOrder.quantity++;
    } else {
      currentOrder.items.push({
        id: product.isbn,
        product,
        quantity
      });
    }

    this.order.next(this.calculateOrder(currentOrder));
  }

  public deleteOrderItem(orderItem: OrderItem) {
    const currentOrder = this.order.getValue();

    currentOrder.items = currentOrder.items.filter((oi) => oi.id !== orderItem.id);

    this.order.next(this.calculateOrder(currentOrder));
  }

  public changeQuantityOrderItem(orderItem: OrderItem, quantity: number) {
    const currentOrder = this.order.getValue();

    const orderItemInOrder = currentOrder.items.find((oi) => oi.id === orderItem.id);

    if (orderItemInOrder) {
      orderItemInOrder.quantity += quantity;

      if (orderItemInOrder.quantity <= 0) {
        currentOrder.items = currentOrder.items.filter((oi) => oi.id !== orderItem.id);
      }
    }

    this.order.next(this.calculateOrder(currentOrder));
  }

  private calculateOrder(order: Order) {
    return {
      ...order,
      count: order.items.reduce((value, item) => value + item.quantity, 0),
      total: order.items.reduce((value, item) => value + item.quantity * item.product.price, 0)
    };
  }

  private calculateReductionForOffer(order: Order, offer: CommercialOffer) {
    switch (offer.type) {
      case 'percentage': {
        return order.total * (offer.value / 100);
      }
      case 'minus': {
        return offer.value;
      }
      case 'slice': {
        const nbSlice = Math.floor(order.total / offer.sliceValue);
        return nbSlice * offer.value;
      }
    }
  }

  private calculateBestReduction(order: Order, offers: CommercialOffer[]) {
    return offers
      .map((offer) => ({ offer, amount: this.calculateReductionForOffer(order, offer) }))
      .sort((a, b) => (a.amount < b.amount ? 1 : -1))[0];
  }
}
