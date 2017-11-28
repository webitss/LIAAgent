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
import {ProductDetailsComponent} from "./products/productDetails.component";
<<<<<<< HEAD

=======
import {videoComponentComponent} from "./packages/video.component";
import { PackageSelectedComponent } from './packages/packageSelected.component';
import { PopupComponent } from './popups/popup.component';
import { Popup2Component } from './popups/popup2.component';
>>>>>>> 899ecf9d015e5dad5de2d0692af63217daf525f6



export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('access_token'))
    }), http, options);
}


@NgModule({
    declarations: [
        AppComponent,EnterComponent, HomeComponent,LogoComponent, LoginComponent,MenuComponent, 
        GaleryComponent, ProductsComponent,ProductDetailsComponent, CustomerComponent, CartComponent,
        PackagesComponent,PackageComponent,PackageSelectedComponent,PopupComponent,Popup2Component

    ],
    imports: [
            BrowserModule,HttpModule,
            HttpClientModule, 
            RouterModule.forRoot([
                {path: '', component: LogoComponent, children:[{path: 'login', component: LoginComponent}]},
                {path: 'menu', component: MenuComponent, children:[
                {path: 'galery', component: GaleryComponent},
                {path: 'packages', component: PackagesComponent},
<<<<<<< HEAD
=======
                {path: 'packages/:productId', component: PackageSelectedComponent},
                {path: 'packageSelected', component: PackageSelectedComponent},
                {path: 'productDetails', component: ProductDetailsComponent},
                //{path: 'packages3/:ProductId/video', component: videoComponentComponent},
>>>>>>> 899ecf9d015e5dad5de2d0692af63217daf525f6
                {path: 'product', component: ProductsComponent},
                {path: 'product/:productId', component: ProductDetailsComponent},
                {path: 'customer', component: CustomerComponent},
                {path: 'cart', component: CartComponent},
                {path: 'enter', component: EnterComponent},                    
            ]}

        ])
    ],
    providers: [LiaService,LiaProxy,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },AuthService],
    exports:[RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
