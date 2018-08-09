import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "../service_model/order.service";
import { order_details } from "../Class_models/order_details_class";
import {PageEvent, MatPaginator, MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { Router } from "@angular/router";


@Component({
  selector: 'app-past-order-details',
  templateUrl: './past-order-details.component.html',
  styles: []
})
export class PastOrderDetailsComponent implements OnInit {


  displayedColumns: string[] = ['dish_name','qty','price','remark'];
  dataSource=new MatTableDataSource();

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  id:number;
  details_arr:order_details[]=[];
  constructor(public _actroute:ActivatedRoute,public _ser:OrderService,public _router:Router) { }

  onclickHome()
  {
    this._router.navigate(['/home']);
  }


  onclickBack()
  {
    this._router.navigate(['/pastorder']);
  }
  onClickLogout()
  {
    localStorage.clear();
    this._router.navigate(['']);
  }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this.id=this._actroute.snapshot.params['id'];
    this._ser.getPastOrder(this.id).subscribe(
      (data:order_details[])=>
      {
        this.details_arr=data;
        this.dataSource.data=this.details_arr;
      }
    );
  }

}
