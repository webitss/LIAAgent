import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export enum myComponents{
    galery,
    packages,
    products,
    customers,
    cart
}
export enum myProducts{
    Site,
    Warnings,
    Application,
    FavoriteSales,
    FaceBookCampain
}
@Injectable()

export class AppService{
    //http://ws.webit-track.com/LiaWS_QA/Service1.svc/GetGaleryPictures
    constructor(public http:HttpClient)
    {

    }
    pictures:any;

    /*  load(){
          try{
              let pictures = this.proxy.post();
              this.pictures = pictures;
              console.log(this.pictures);
          }catch(ex){
              console.log(`ex: ${ex}`);
          }


     }*/
    changeCurrentProduct(product:String)
    {
        switch(product)
        {
            case "Site":this.currentProduct=myProducts.Site;
                this.thisProduct="site";
                break;
            case "Warnings":this.currentProduct=myProducts.Warnings;
                this.thisProduct="Warnings";
                break;
            case "Application":this.currentProduct=myProducts.Application;
                this.thisProduct="Application";
                break;
            case "FavoriteSales":this.currentProduct=myProducts.FavoriteSales;
                this.thisProduct="FavoriteSales";
                break;
            case "FaceBookCampain":this.currentProduct=myProducts.FaceBookCampain;
                this.thisProduct="FaceBookCampain";
                break;

        }
    }
    changeCurrentComponent(component:String)
    {
        switch(component)
        {
            case "galery":this.currentComponent=myComponents.galery;
                break;
            case "packages":this.currentComponent=myComponents.packages;
                break;
            case "products":this.currentComponent=myComponents.products;
                break;
            case "customers":this.currentComponent=myComponents.customers;
                break;
            case "cart":this.currentComponent=myComponents.cart;
                break;

        }

    }
    currentComponent:myComponents;
    currentProduct:myProducts;
    thisProduct:String;

}