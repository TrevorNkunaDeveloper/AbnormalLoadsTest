import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { TruckimagecomponentComponent } from './truckimagecomponent/truckimagecomponent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailscomponentComponent } from './detailscomponent/detailscomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { IntrocomponentComponent } from './introcomponent/introcomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { RegistrationcomponentComponent } from './registrationcomponent/registrationcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    FormcomponentComponent,
    TruckimagecomponentComponent,
    NavbarComponent,
    DetailscomponentComponent,
    FootercomponentComponent,
    IntrocomponentComponent,
    LogincomponentComponent,
    HomecomponentComponent,
    RegistrationcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
