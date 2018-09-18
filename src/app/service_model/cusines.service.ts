import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cusine } from '../Class_models/cusine_class';




@Injectable({
  providedIn: 'root'
})
export class CusinesService {
  private ip=localStorage.getItem('ipaddress');
  private cusine_url="http://"+this.ip+":3000/cusine/";//"http://localhost:3000/cusine/";
  private cusine_url1="http://"+this.ip+":3000/cusine1/";//"http://localhost:3000/cusine1/";



  constructor(private _http:HttpClient) { }
  getCusine()
  {
      return this._http.get(this.cusine_url);
  }
  getCusinesByName(cusine_name:string)
  {
    return this._http.get(this.cusine_url+cusine_name);
  }
  addcusine(item)
  {
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.cusine_url,item,{headers:head1});
  }
  deleteAll(item:cusine[])
  {
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.cusine_url1,body,{headers:head1});
  }
  updateCusine(item)
  {
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.cusine_url,body,{headers:head1});
  }
  getCusineById(id)
  {
    return this._http.get(this.cusine_url1+id);
  }

}
