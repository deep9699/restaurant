import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ip=localStorage.getItem('ipaddress');
  private order_url="http://"+this.ip+":3000/order/";
  private order_details_url="http://"+this.ip+":3000/order_details/";
  constructor(private _http:HttpClient) { }

  getOrder(id)
  {
    return this._http.get(this.order_url+id);
  }
  getPastOrder(id)
  {
    return this._http.get(this.order_details_url+id);
  }
}
