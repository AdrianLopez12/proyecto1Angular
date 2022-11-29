import { Injectable } from '@angular/core';
import { product } from '../pages/domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  lstproducts = new Array;

  constructor() { }

  addProduct(product: product) {
this.lstproducts.push(product);

  }

  getProducts(){
    return this.lstproducts;
  }
}
