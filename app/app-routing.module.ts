import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PrincipalComponent} from './principal/principal.component';
import { ProductosComponent } from './productos/productos.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [  
{
  path: '',
  component: PrincipalComponent,
  },
  {
    path:'principal',
    component: PrincipalComponent,
  },
  {
    path:'productos',
    component: ProductosComponent,
  },
  {
    path:'informacion',
    component: InformacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
