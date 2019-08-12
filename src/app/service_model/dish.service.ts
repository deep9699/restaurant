import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { dish } from "../Class_models/dish_class";
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DishService {
  constructor(private _http:HttpClient) { }
  private ip=localStorage.getItem('ipaddress');
  private dish_url="http://"+this.ip+":3000/dish/";//'http://localhost:3000/dish/';
  private dish_url1="http://"+this.ip+":3000/dish1/";//'http://localhost:3000/dish1/';

  addDish(fd:FormData)
  {
    return this._http.post(this.dish_url,fd);
  }
  extra(fd:FormData)
  {
    return this._http.post(this.dish_url,fd);
  }
  getDish()
  {
    return this._http.get(this.dish_url);
  }
  updateDish(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.dish_url,body,{headers:head1});
  }
  getDishById(id)
  {
    return this._http.get(this.dish_url+id);
  }
  deleteAll(item:dish[])
  {
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.dish_url1,body,{headers:head1});
  }
}
