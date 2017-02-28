import { Component, OnInit } from '@angular/core';
import {} from "../services/customer.services";
import {} from "../models/customer.model";

@Component({
  selector: 'app-customers-comp',
  templateUrl: './customers-comp.component.html',
  styleUrls: ['./customers-comp.component.css'],
  providers: [CustomerService]
})
export class CustomersCompComponent implements OnInit {
  //newName: string ="";
  //newMail: string ="";
  customer: Customer;
  customServ: CustomerService;

  constructor(customerServ: CustomerService) {
    this.customServ = customerServ;
  }

  ngOnInit() {
    //this.newName="";
    //this.newMail ="";
    this.customer= new Customer();
  }

  enviar(){
    this.customServ.enviar(
      new cust
    )
  }

}
