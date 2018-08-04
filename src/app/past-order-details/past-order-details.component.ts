import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CusinesService } from "../service_model/cusines.service";
import { order_details } from "../Class_models/order_details_class";
import { OrderService } from "../service_model/order.service";

@Component({
  selector: 'app-past-order-details',
  templateUrl: './past-order-details.component.html',
  styles: []
})
export class PastOrderDetailsComponent implements OnInit {

  id:number;
  details_arr:order_details[]=[];
  constructor(public _actroute:ActivatedRoute,public _ser:OrderService) { }

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
