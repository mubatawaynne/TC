import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutPageComponent } from './produt-page/produt-page.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SliderComponent } from './components/slider/slider.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChatComponent } from './chat/chat.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutPageComponent,
    AboutComponent,
    ProductListComponent,
  
    
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    ContactUsComponent,
    SliderComponent,
    TestimonialsComponent,
    ChatComponent,
    BrandsComponent,
    CartComponent,
   
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
