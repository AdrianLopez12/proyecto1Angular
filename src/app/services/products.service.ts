import { Injectable } from '@angular/core';
import { product } from '../pages/domain/product';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  lstproducts = new Array();

  products: any;

  private productsCollection: AngularFirestoreCollection<product>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<product>('productos');
  }

  addProduct(product: product) {
    this.lstproducts.push(product);
  }

  getProducts() {
    return this.lstproducts;
  }

  addproductFire(product: product) {
    const id = this.afs.createId();
    product.uid = id;
    this.productsCollection.doc(id).set(Object.assign({}, product));
  }

  editarproductFire(product: product) {
    console.log(product);
    this.productsCollection.doc(product.uid).update(Object.assign({}, product));
  }


  deleteProductFire(product: product) {
    this.productsCollection.doc(product.uid).delete();
  }

  getProductsFire() {
    return this.productsCollection.valueChanges();
  }
}
