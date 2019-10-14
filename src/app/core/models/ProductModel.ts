export interface Product {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: string[];
}

export interface CommercialOffersResponse {
  offers: CommercialOffer[];
}

export type CommercialOffer =
  | {
      type: 'percentage' | 'minus';
      value: number;
    }
  | {
      type: 'slice';
      value: number;
      sliceValue: number;
    };

export interface State {
  count: number;
  loading: boolean;
  products: Product[];
}
