import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private _http:HttpClient) { }

  private bill_url="http://localhost:3000/bill/";
  private bill_details_url="http://localhost:3000/bill_details/";


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
  insertBillDetails(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.bill_details_url,body,{headers:head1});
  }

}
