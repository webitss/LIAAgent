export class PackagesModel {

    Type:types;
    Tickets:number;
    Price:number;
    Total:number;
    isAny:boolean=true;


    constructor(){

    }
}
export enum types{
    gold,
    bronze,
    silver
}