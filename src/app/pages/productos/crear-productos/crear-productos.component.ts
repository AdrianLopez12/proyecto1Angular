import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { product } from '../../domain/product';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.scss']
})
export class CrearProductosComponent {
title= "Crear Productos";

product: product = new product()

constructor(private router: Router, 
  private productsService: ProductsService) { 

   let params= this.router.getCurrentNavigation()?.extras.queryParams;
       if(params){
        this.product = new product()
        this.product.code = params['code'];
        this.product.name = params['name'];
        this.product.price = params['price'];
       
       }
    

  }
  
 

ngOnInit(): void {
}

guardar(){

  console.log(this.product);
  this.productsService.addProduct(this.product);
  this.product = new product();
}

goListarProductos(){
  console.log("llamado listado");
  this.router.navigate(['productos/listar']);
}
}
