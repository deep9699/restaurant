import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { customer } from './login/customer_class';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private loginurl:string="http://localhost:3000/customer/";

  constructor(private _http:HttpClient) { }

  getCustomerByLogin(item:customer)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.loginurl,body,{headers:head1});
  }


}
