import {Customer} from "../models/customer.model";
import {Injectable} from "@angular/core";
import {Http:headers, Request Options} from "@angular/http";
import "rxjs/add/operator/ma", url="http://localhost:3000/api/customers/";

declare var jQuery: any;

@Injectable()
export class CustomerService {
    constructor(http: Http){

    }
    public enviar(customer: Customer) {
        //alert(customer.name);
        jQuery.post("http://localhost:3000/api/customers/", customer, function(data, status){
            alert("Data: "+data + "\nStatus: "+status);
        })
    }
    public recibir(name: string, callBK){

    }
}