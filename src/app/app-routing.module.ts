import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/productos/producto/producto.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent, children: [
    {path:"", component:ProductosComponent},
    {path:"cart", component: CarritoComponent},
    {path:"product/:id", component: ProductoComponent, pathMatch: 'full'}
  ]},
  //{path:cart, component: cartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
