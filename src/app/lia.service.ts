import {Injectable} from '@angular/core';
import {LiaProxy} from "./proxy";
import {Router} from "@angular/router";

@Injectable()
export class LiaService {
    package:any;
    packages: any[];
    galeryPictures:any[];
    src:string;
    source:String;
    getData:any;
    products:any[];
    customers:any[];
    nowComponent:String;
    product:any;
    thisProductDetails: any;
    isOuter:boolean;
    isInner:boolean;
    constructor(private proxy: LiaProxy, public router: Router) {
        this.galeryPictures=new Array();
        this.products=new Array();
        this.customers=new Array();
        this.packages = new Array();
        this.post("GetGaleryPictures");
        this.post("GetAdditionalProducts");
        this.post("GetPackages");
        console.log(this.galeryPictures);
        console.log(this.packages);
        console.log(this.products);
    }

    async post(func: string): Promise<any> {
          await this.proxy.post(func).then((res) => {
            this.getData = res;
            for (let i=0;i<this.getData.Result.length;i++)
            {
                switch (func)
            {
                case "GetAdditionalProducts":
                    this.products[i]=this.getData.Result[i];
                    break;
                case "GetGaleryPictures" :
                    this.galeryPictures[i]=this.getData.Result[i];
                    break;
                case "GetPackages":
                this.packages[i] = this.getData.Result[i];
                break;
            }
           }
           
           
            //return this.packages[0];
        }).catch(() => console.log("error"));
    }

    

    getPackageById(id: number): any {
        console.log(this.packages.length);
        for(let i=0;i<this.packages.length;i++)
            if(this.packages[i].ProductId==id)
               return this.packages[i];

    }

//     getProductById(id:number)
//     {
//         for (let i=0;i<this.products.length;i++)
//         {
//           
//             if(this.products[i].ProductId==id)
//             {
//                 this.product=this.products[i];
//                 i=this.products.length;
//             }
//         }

//    }

   goTo(pr:number)
   {
       for(let i=0; i< this.products.length; i++){
           if(this.products[i].ProductId === pr)
           this.thisProductDetails = this.products[i];
       }

       this.router.navigate(['menu/productDetails']);
   }
  
}








/*packages: any[];
    //ListShell<ProductAdditionalObj>
    constructor(private proxy: LiaProxy) {
        this.galeryPictures=new Array();
        this.products=new Array();
        this.customers=new Array();
    }
    source:String;
    getData:any;
    galeryPictures:any[];
    products:any[];
    customers:any[];
    nowComponent:String;
    async post(postFunction:String):Promise<any> {
        await this.proxy.post(postFunction).then((res) => {
            this.getData=res;
            console.log(this.getData);
            for (let i=0;i<this.getData.Result.length;i++)
            {
                switch (postFunction)
            {
                case "GetAdditionalProducts":
                    this.products[i]=this.getData.Result[i];
                    console.log(this.products);
                    break;
                case "GetGaleryPictures" :
                    this.galeryPictures[i]=this.getData.Result[i];
                    console.log(this.galeryPictures);
                    break;
            }

           }
        }).catch(() => console.log("error"));
    }
    product:any;
    getProductById(id:number)
    {
        for (let i=0;i<this.products.length;i++)
        {
            console.log(this.products[i].ProductId+" "+id);
            if(this.products[i].ProductId==id)
            {
                this.product=this.products[i];
                i=this.products.length;
            }
        }

   } */



