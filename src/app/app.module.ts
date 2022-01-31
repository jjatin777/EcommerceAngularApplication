import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SiteComponent } from './site/site.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SiteComponent,
    UserLoginComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'Main', component: SiteComponent, children: [
        { path: 'Products', component: ProductsComponent},
        { path: 'Products/:id', component: ProductDetailComponent}
        ]
      },
      {path:'Login', component:UserLoginComponent},
      {path:'Register', component: UserComponent},
      {path:'Products', component: ProductsComponent, outlet: "site"},
      {path:'**', redirectTo: '/Main'}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
