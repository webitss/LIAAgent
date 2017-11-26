import {Injectable} from '@angular/core';
import {LiaProxy} from "./proxy";

@Injectable()
export class LiaService {

    temp: any[];
    packages: any[];
    galery: any[];
    src:string;

    constructor(private proxy: LiaProxy) {
        this.temp = new Array();
    }

    getPackageById(id: number): any {
        console.log(this.packages.length);
        for(let i=0;i<this.packages.length;i++)
            if(this.packages[i].ProductId==id)
               return this.packages[i];

    }

    getData: any;

    async post(func: string): Promise<any> {
        this.temp = new Array();
        await this.proxy.post(func).then((res) => {
            this.getData = res;
            for (let i = 0; i < this.getData.Result.length; i++) {
                this.temp[i] = this.getData.Result[i];
            }
            //return this.packages[0];
        }).catch(() => console.log("error"));
    }
}



