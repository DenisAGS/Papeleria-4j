import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ProductosComponent } from './productos/productos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [  
{
    path:'productos',
    component: ProductosComponent,
  },
  {
    path:'informacion',
    component: InformacionComponent,
  },
  {
    path:'prueba',
    component: PruebaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
