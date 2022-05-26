import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ItservicesComponent } from './components/itservices/itservices.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { SubitservicesComponent } from './components/itservices/subitservices/subitservices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    IndustriesComponent,
    ItservicesComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SubitservicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
