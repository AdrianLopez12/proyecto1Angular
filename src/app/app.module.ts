import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductosComponent,
    ListarProductosComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
