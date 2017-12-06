import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {AuthService} from "./authentication.service";
import { Http, RequestOptions,HttpModule } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
//import { GaleryComponent } from './galery/galery.component';
import { ProductsComponent } from './products/products.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import {PackagesComponent} from './packages/3packages/packages.component';
import {PackageComponent} from './packages/package/package.component';
import {EnterComponent} from "./enter.component";
import {LogoComponent} from "./logo.component";
import {LiaService} from "./lia.service";
import {LiaProxy} from "./proxy";
import {HttpClientModule} from "@angular/common/http";
import { PackageSelectedComponent } from './packages/packageSelected/packageSelected.component';
import { Popup2Component } from './popups/popup2/popup2.component';
import { ProductDetailsComponent } from './products/productDetails.component';
import { VideoComponent } from './video.component';
import { PayComponent } from './payment/pay/pay.component';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
//import * as SignaturePad from 'signature_pad';
import { FormOfUseComponent } from './payment/formOfUse/formOfUse.component';
import { MenuComponent } from './menu/menu.component';
import { GaleryComponent } from './galery/galery.component';
import { personalFormComponent } from './forms/personalForm/personalForm.component';
import { businessFormComponent } from './forms/businessForm/businessForm.component';




export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('access_token'))
    }), http, options);
}


@NgModule({
    declarations: [
        AppComponent,EnterComponent, HomeComponent,LogoComponent, LoginComponent,MenuComponent, 
        GaleryComponent, ProductsComponent, CustomerComponent, CartComponent, ProductDetailsComponent,
        PackagesComponent,PackageComponent,PackageSelectedComponent,
        Popup2Component, VideoComponent,personalFormComponent,businessFormComponent,PayComponent,FormOfUseComponent

    ],
    imports: [
            BrowserModule,HttpModule,FormsModule,ReactiveFormsModule,
            HttpClientModule, 
            RouterModule.forRoot([
                {path: '', component: LogoComponent, children:[{path: 'login', component: LoginComponent}]},
                {path: 'menu', component: MenuComponent, children:[
                {path: 'galery', component: GaleryComponent},
                {path: 'packages', component: PackagesComponent},
                {path: 'packages/:productId', component: PackageSelectedComponent},
                {path: 'packageSelected', component: PackageSelectedComponent},
                {path: 'product/:productId', component: ProductDetailsComponent},
                {path: 'product', component: ProductsComponent},
                {path: 'product/:productId/video', component: VideoComponent},
                {path: 'packages/:productId/video', component: VideoComponent},
                {path: 'pay',component:PayComponent},
                {path:'personalForm',component:personalFormComponent},
                {path:'businessForm',component:businessFormComponent},
                {path:'pay/formOfUse',component:FormOfUseComponent},
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
    exports:[RouterModule, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
