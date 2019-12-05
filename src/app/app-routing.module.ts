import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


const routes: Routes = [
  {path: "",redirectTo:'/home',pathMatch:'full' },
  {path: 'home', component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'products',component:ProductsComponent},
  {path: 'productdetails/:id',component:ProductDetailsComponent},
  {path:'**',component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
