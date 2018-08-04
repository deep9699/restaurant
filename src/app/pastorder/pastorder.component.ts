import { Component, OnInit } from '@angular/core';
import { OrderService } from "../service_model/order.service";
import { pastorder } from "../Class_models/pastorder_class";
import { Router } from "@angular/router";



@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  pastarr:pastorder[]=[];
  constructor(private _ser:OrderService,public _router:Router) { }

  onclickBack()
  {
    this._router.navigate(['home']);
  }
  onClick(item)
  {
    this._router.navigate(['/past_order_details',item.bill_id]);
  }
  ngOnInit() {

    this._ser.getOrder(localStorage.getItem('email_id')).subscribe(
      (data:any[])=>
      {
         console.log(data);
        this.pastarr=data;
      }
    );
  }

}
