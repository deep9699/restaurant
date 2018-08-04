import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CusinesService {
  private cusine_url="http://localhost:3000/cusine/";


  constructor(private _http:HttpClient) { }
  getCusine()
  {
      return this._http.get(this.cusine_url);
  }
  getCusinesByName(cusine_name:string)
  {
    return this._http.get(this.cusine_url+cusine_name);
  }

}
