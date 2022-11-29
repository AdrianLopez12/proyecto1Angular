import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { product } from '../../domain/product';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent {
title= "Listar Productos existentes";

lstProducts = new Array;

constructor(private router: Router,
  private productsService: ProductsService) { }
   

ngOnInit(): void {
this.loadProducts()
}


loadProducts(){
  this.lstProducts = this.productsService.getProducts();
  console.log(this.lstProducts);
}


goNewProduct(){
  console.log("llamado crear");
  this.router.navigate(['productos/crear']);
}

editProduct(product: product){
  console.log("llamado editar "+product);

  let params: NavigationExtras = {
    queryParams: {
      code: product.code,
      name: product.name,
      price: product.price
    }
  }

  this.router.navigate(['productos/crear'], params);
}
deleteProduct(product: product){
  console.log(this.lstProducts.indexOf(product));

 var i=this.lstProducts.indexOf(product);
  this.lstProducts.splice(i,1);
}

}
