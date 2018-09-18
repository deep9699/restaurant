import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { customer } from '../Class_models/customer_class';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   ip=localStorage.getItem('ipaddress');
  private loginurl:string="http://"+this.ip+":3000/customer/";
  private signupurl:string="http://"+this.ip+":3000/customer1/";

  constructor(private _http:HttpClient) { }

  getCustomerByLogin(item:customer)
  {
    console.log(this.loginurl);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.loginurl,body,{headers:head1});
  }

  insertCustomer(item:customer)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.signupurl,body,{headers:head1});
  }

}
