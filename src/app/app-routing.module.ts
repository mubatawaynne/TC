import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { ContactUsComponent } from  './contact-us/contact-us.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProdutPageComponent} from './produt-page/produt-page.component';
import {ProjectsComponent} from './projects/projects.component';
import { CartComponent } from './cart/cart.component';


 

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'footer', component:FooterComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'product-list', component:ProductListComponent},
  {path:'produt-page', component:ProdutPageComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'cart', component:CartComponent},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
