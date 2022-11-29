import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { product } from '../../domain/product';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss'],
})
export class ListarProductosComponent {
  private productsCollection: AngularFirestoreCollection<product>;

  title = 'Listar Productos existentes';

  lstProducts = new Array();
  products: any;

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private afs: AngularFirestore
  ) {
    this.productsCollection = afs.collection<product>('productos');
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    // this.lstProducts = this.productsService.getProducts();
    this.products = this.productsService.getProductsFire();
    console.log(this.products);
  }

  goNewProduct() {
    console.log('llamado crear');
    this.router.navigate(['productos/crear']);
  }

  editProduct(product: product) {
    console.log('llamado editar ' + product);

    let params: NavigationExtras = {
      queryParams: {
        code: product.code,
        name: product.name,
        price: product.price,
        uid: product.uid,
      },
    };

    this.router.navigate(['productos/editar'], params);
  }
  deleteProduct(product: product) {
    console.log(this.lstProducts.indexOf(product));

    var i = this.lstProducts.indexOf(product);
    this.lstProducts.splice(i, 1);
  }
  deleteProductFire(product: product) {
    this.productsCollection.doc(product.uid).delete();
  }
}
