import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent {
title= "Listar Productos existentes";
constructor(private router: Router) { }

ngOnInit(): void {
}
goCrearProductos(){
  console.log("llamado crear");
  this.router.navigate(['productos/crear']);
}
}
