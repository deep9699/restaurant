import { Component, OnInit } from '@angular/core';
import { CusinesService } from "../cusines.service";
import { pastorder } from "../pastorder/pastorder_class";
import { Router } from "@angular/router";


@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  pastarr:pastorder[]=[];
  constructor(private _ser:CusinesService,public _router:Router) { }

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
