import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrderComponent } from './pages/order/order.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { SpicesComponent } from './products/spices/spices.component';
import { DryFruitsComponent } from './products/dry-fruits/dry-fruits.component';
import { FlourComponent } from './products/flour/flour.component';
import { PulsesComponent } from './products/pulses/pulses.component';
import { NamkeenComponent } from './products/namkeen/namkeen.component';
import { RiceComponent } from './products/rice/rice.component';
import { ReligiousProductsComponent } from './products/religious-products/religious-products.component';
import { KitchenCutleryComponent } from './products/kitchen-cutlery/kitchen-cutlery.component';
import { PicklesComponent } from './products/pickles/pickles.component';
import { BakeryComponent } from './products/bakery/bakery.component';
import { OthersComponent } from './products/others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    OrderComponent,
    AboutComponent,
    CartComponent,
    SpicesComponent,
    DryFruitsComponent,
    FlourComponent,
    PulsesComponent,
    NamkeenComponent,
    RiceComponent,
    ReligiousProductsComponent,
    KitchenCutleryComponent,
    PicklesComponent,
    BakeryComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
