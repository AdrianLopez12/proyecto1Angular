import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { product } from '../../domain/product';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.scss'],
})
export class EditarProductosComponent {
  title = 'Editar Productos existentes';

  product: product = new product();

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      this.product = new product();
      this.product.code = params['code'];
      this.product.name = params['name'];
      this.product.price = params['price'];
      this.product.uid = params['uid'];
    }
  }

  ngOnInit(): void {}

  editar() {
    console.log(this.product);
    this.productsService.editarproductFire(this.product);
    this.product = new product();
    this.router.navigate(['productos/listar']);
  }

  goListarProductos() {
    console.log('llamado listado');
    this.router.navigate(['productos/listar']);
  }
}
