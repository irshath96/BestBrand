import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './guard/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BakeryComponent } from './products/bakery/bakery.component';
import { DryComponent } from './products/dry/dry.component';
import { FloursComponent } from './products/flours/flours.component';
import { KitchenComponent } from './products/kitchen/kitchen.component';
import { NamkeenComponent } from './products/namkeen/namkeen.component';
import { OtherComponent } from './products/other/other.component';
import { PicklesComponent } from './products/pickles/pickles.component';
import { PulseComponent } from './products/pulse/pulse.component';
import { ReligiousComponent } from './products/religious/religious.component';
import { RiceComponent } from './products/rice/rice.component';
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
    path: 'details', component: DetailsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'confirm', component:ConfirmComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'spices', component: SpicesComponent
  },
  {
    path: 'pulse', component: PulseComponent
  },
  {
    path: 'dry', component: DryComponent
  },
  {
    path: 'namkeen', component: NamkeenComponent
  },
  {
    path: 'flours', component: FloursComponent
  },
  {
    path: 'rice', component: RiceComponent
  },
  {
    path: 'religious', component:ReligiousComponent
  },
  {
    path: 'kitchen', component: KitchenComponent
  },
  {
    path: 'pickles', component: PicklesComponent
  },
  {
    path: 'bakery', component: BakeryComponent
  },
  {
    path: 'other', component: OtherComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'forgot', component: ForgotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
