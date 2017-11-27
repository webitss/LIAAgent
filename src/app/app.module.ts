import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {AuthService} from "./authentication.service";
import { Http, RequestOptions,HttpModule } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { GaleryComponent } from './galery/galery.component';
import { ProductsComponent } from './products/products.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import {PackagesComponent} from './packages/packages.component';
import {PackageComponent} from './packages/package.component';
import {EnterComponent} from "./enter.component";
import {LogoComponent} from "./logo.component";
import {MenuComponent} from "./menu.component";
import {LiaService} from "./lia.service";
import {LiaProxy} from "./proxy";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import {ProductDetailsComponent} from "./products/productDetails.component";
import {videoComponentComponent} from "./packages/video.component";


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('access_token'))
    }), http, options);
}


@NgModule({
    declarations: [
        AppComponent,videoComponentComponent,EnterComponent, HomeComponent,LogoComponent, LoginComponent,MenuComponent, 
        GaleryComponent, ProductsComponent,ProductDetailsComponent, CustomerComponent, CartComponent,
        PackagesComponent,PackageComponent
    ],
    imports: [
            BrowserModule,HttpModule,HttpClientModule, 
            RouterModule.forRoot([
                {path: '', component: LogoComponent, children:[{path: 'login', component: LoginComponent}]},
                {path: 'menu', component: MenuComponent, children:[
                {path: 'galery', component: GaleryComponent},
                {path: 'packages', component: PackagesComponent},
                {path: 'productDetails', component: ProductDetailsComponent},
                //{path: 'packages3/:ProductId/video', component: videoComponentComponent},
                {path: 'product', component: ProductsComponent},
                {path: 'customer', component: CustomerComponent},
                {path: 'cart', component: CartComponent},
                {path: 'enter', component: EnterComponent}
            ]}

        ])
    ],
    providers: [AppService,LiaService,LiaProxy,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
