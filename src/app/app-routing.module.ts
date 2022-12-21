import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { BakeryComponent } from './products/bakery/bakery.component';
import { DryFruitsComponent } from './products/dry-fruits/dry-fruits.component';
import { FlourComponent } from './products/flour/flour.component';
import { KitchenCutleryComponent } from './products/kitchen-cutlery/kitchen-cutlery.component';
import { NamkeenComponent } from './products/namkeen/namkeen.component';
import { OthersComponent } from './products/others/others.component';
import { PicklesComponent } from './products/pickles/pickles.component';
import { PulsesComponent } from './products/pulses/pulses.component';
import { ReligiousProductsComponent } from './products/religious-products/religious-products.component';
import { RiceComponent } from './products/rice/rice.component';
import { SpicesComponent } from './products/spices/spices.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path : 'home', component: HomeComponent
  },
  {
    path : 'about', component: AboutComponent
  },
  {
    path : 'product', component: ProductComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path : 'cart', component: CartComponent
  },
  {
    path: 'spices', component: SpicesComponent
  },
  {
    path: 'pulses', component: PulsesComponent 
  },
  {
    path: 'dry-fruits', component: DryFruitsComponent
  },
  {
    path: 'namkeen', component: NamkeenComponent
  },
  {
    path: 'flour', component: FlourComponent
  },
  {
    path: 'rice', component: RiceComponent
  },
  {
    path: 'religious-products', component: ReligiousProductsComponent
  },
  {
    path: 'kitchen-cutlery', component: KitchenCutleryComponent
  },
  {
    path: 'pickles', component: PicklesComponent
  },
  {
    path: 'bakery', component: BakeryComponent
  },
  {
    path: 'others', component: OthersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
