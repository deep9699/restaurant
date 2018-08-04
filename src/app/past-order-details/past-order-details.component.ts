import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CusinesService } from "../cusines.service";
import { order_details } from "../pastorder/order_details_class";

@Component({
  selector: 'app-past-order-details',
  templateUrl: './past-order-details.component.html',
  styles: []
})
export class PastOrderDetailsComponent implements OnInit {

  id:number;
  details_arr:order_details[]=[];
  constructor(public _actroute:ActivatedRoute,public _ser:CusinesService) { }

  ngOnInit() {
    this.id=this._actroute.snapshot.params['id'];
    this._ser.getPastOrder(this.id).subscribe(
      (data:order_details[])=>
      {
        this.details_arr=data;
      }
    );
  }

}
