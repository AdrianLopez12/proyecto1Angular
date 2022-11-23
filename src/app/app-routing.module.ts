import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';

const routes: Routes = [
  {path: 'productos/crear', component: CrearProductosComponent},
  {path: 'productos/listar', component: ListarProductosComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
