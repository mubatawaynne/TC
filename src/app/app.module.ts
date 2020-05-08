import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutPageComponent } from './produt-page/produt-page.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';

import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutPageComponent,
    AboutComponent,
    ProductListComponent,
  
    RequestQuoteComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    ContactUsComponent,
    SliderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
