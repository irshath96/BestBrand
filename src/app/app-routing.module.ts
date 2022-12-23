import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BakeryComponent } from './products/bakery/bakery.component';
import { DryComponent } from './products/dry/dry.component';
import { FloursComponent } from './products/flours/flours.component';
import { KitchenComponent } from './products/kitchen/kitchen.component';
import { NamkeenComponent } from './products/namkeen/namkeen.component';
import { SpicesComponent } from './products/spices/spices.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'bakery', component: BakeryComponent
  },
  {
    path: 'dry', component: DryComponent
  },
  {
    path: 'flours', component: FloursComponent
  },
  {
    path: 'kitchen', component: KitchenComponent
  },
  {
    path: 'namkeen', component: NamkeenComponent
  },
  {
    path: 'spices', component: SpicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
