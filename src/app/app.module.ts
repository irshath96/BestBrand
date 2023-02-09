import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SpicesComponent } from './products/spices/spices.component';
import { PulseComponent } from './products/pulse/pulse.component';
import { DryComponent } from './products/dry/dry.component';
import { NamkeenComponent } from './products/namkeen/namkeen.component';
import { FloursComponent } from './products/flours/flours.component';
import { RiceComponent } from './products/rice/rice.component';
import { ReligiousComponent } from './products/religious/religious.component';
import { KitchenComponent } from './products/kitchen/kitchen.component';
import { PicklesComponent } from './products/pickles/pickles.component';
import { BakeryComponent } from './products/bakery/bakery.component';
import { OtherComponent } from './products/other/other.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './pages/details/details.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    SpicesComponent,
    PulseComponent,
    DryComponent,
    NamkeenComponent,
    FloursComponent,
    RiceComponent,
    ReligiousComponent,
    KitchenComponent,
    PicklesComponent,
    BakeryComponent,
    OtherComponent,
    DetailsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
