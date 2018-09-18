import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private _http:HttpClient) { }

   ip=localStorage.getItem('ipaddress');
  private bill_url="http://"+this.ip+":3000/bill/";//"http://localhost:3000/bill/";
  private bill_details_url="http://"+this.ip+":3000/bill_details/";//"http://localhost:3000/bill_details/";


  getBill()
  {
    console.log(this.bill_url);
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
