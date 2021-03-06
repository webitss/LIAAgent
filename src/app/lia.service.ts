import {Injectable} from '@angular/core';
import {LiaProxy} from "./proxy";
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";


@Injectable()
export class LiaService {
    package:any;
    packages: any[];
    galeryPictures:any[];
    source:String;
    getData:any;
    products:any[];
    customers:any[];
    nowComponent:String;
    product:any;
    thisProductDetails: any;
    isOuter:boolean;
    isInner:boolean;
    isPackageProductDetailed:boolean;
    packageProduct:any;
    cart: number = 0;    
    productsOfCart: any[];
    packagesOfCart: any[];
    isPayed:boolean;
    isTerminateOrdered:boolean;
    frmPersonal = new FormGroup({
        first_name: new FormControl("",Validators.required),
        id: new FormControl("",Validators.required),
        phoneNumber: new FormControl("",Validators.required),
        address: new FormControl(),
        email: new FormControl("",Validators.required),
        callPhone: new FormControl()
    })

    frmBusiness = new FormGroup({
        name: new FormControl("",Validators.required),
        PrivatelyHeldCompany: new FormControl("",Validators.required),
        phone: new FormControl("",Validators.required),
        address: new FormControl("",Validators.required),
        websiteAddress: new FormControl("",Validators.required),
        category: new FormControl("",Validators.required)
    })
    frmMoredetails = new FormGroup({
        logo: new FormControl(),
        OpeningHours: new FormControl(),
    })    

    anotherDetails: boolean;
    routeOrStay:string;


    constructor(private proxy: LiaProxy, public router: Router) {
        this.galeryPictures=new Array();
        this.products=new Array();
        this.customers=new Array();
        this.customers[0]={"name":"hhhhh","address":"cccccccccccc","num":4,"another":"jjjjj"};
        this.customers[1]={"name":"aaaaaaaaa","address":"t","num":6,"another":"jjjjj"};
        this.customers[2]={"name":"ddddddddddddd","address":"5pp","num":2,"another":"jjjjj"};
        this.customers[3]={"name":"ttt","address":"t","num":1,"another":"jjjjj"};
        this.packages = new Array();
        this.productsOfCart = new Array();
        this.post("GetGaleryPictures");
        this.post("GetAdditionalProducts");
        this.post("GetPackages");
        this.isPackageProductDetailed=false;
        this.isOuter=true;
        this.isInner=false;
        this.productsOfCart = this.products;
        this.isPayed=false;
        this.isTerminateOrdered=false;
        console.log(this.galeryPictures);
        console.log(this.packages);
        console.log(this.products);
        console.log(this.productsOfCart);
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

    getProductById(id:number)
    {
        for (let i=0;i<this.products.length;i++)
        {
          
            if(this.products[i].ProductId == id)
            {
                this.thisProductDetails=this.products[i];
                i=this.products.length;
            }
        }
   }

   clickAddToCart(pr){
    this.cart++;
    this.productsOfCart.push(pr);
}

clickDeleteFromCart(pr){
    let j;
    for(let i=0; i < this.productsOfCart.length; i++){
        if(this.productsOfCart[i] == pr){
            j = i;
        }
        
    }
    console.log(j);
    this.productsOfCart.splice(j, 1);
    if(this.cart > 0)
    this.cart--;
    console.log(this.productsOfCart);
}

submitFrmPersonal(frm){
  // this.router.navigate(['../businessForm']);
}

submitFrmBusiness(){
    if(this.frmBusiness.valid)
    {
         this.anotherDetails=true;
         this.routeOrStay="../pay";
    }
}

//    goTo(pr:number)
//    {
//        for(let i=0; i< this.products.length; i++){
//            if(this.products[i].ProductId === pr)
//            this.thisProductDetails = this.products[i];
//        }

//        this.router.navigate(['menu/productDetails']);
//    }
  
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



