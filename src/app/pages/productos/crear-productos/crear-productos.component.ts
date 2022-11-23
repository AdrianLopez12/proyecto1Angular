import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.scss']
})
export class CrearProductosComponent {
title= "Crear Productos";

constructor(private router: Router) { }

ngOnInit(): void {
}
goListarProductos(){
  console.log("llamado listado");
  this.router.navigate(['productos/listar']);
}
}
