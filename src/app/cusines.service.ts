import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill } from './home/bill_class';
import { bill_details } from './home/bill_details_class';
import { bill__details } from './home/bill_details_interface';


@Injectable({
  providedIn: 'root'
})
export class CusinesService {
  private cusine_url="http://localhost:3000/cusine/";
  private bill_url="http://localhost:3000/bill/";
  private bill_details_url="http://localhost:3000/bill_details/";
  constructor(private _http:HttpClient) { }
  getCusine()
  {
      return this._http.get(this.cusine_url);
  }
  getCusinesByName(cusine_name:string)
  {
    return this._http.get(this.cusine_url+cusine_name);
  }
  getBill()
  {
    return this._http.get(this.bill_url);
  }
  insertBill(item)
  {
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

     return this._http.post(this.bill_url,body,{headers:head1});
  }
  insertBillDetails(item:bill_details[])
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.bill_details_url,body,{headers:head1});
  }
}
