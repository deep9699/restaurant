import { Component, OnInit,ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

import { OrderService } from "../service_model/order.service";
import { pastorder } from "../Class_models/pastorder_class";
import { Router } from "@angular/router";



@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  displayedColumns: string[] = ['Date','Amount','Button'];
  dataSource=new MatTableDataSource();

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  pastarr:pastorder[]=[];
  constructor(private _ser:OrderService,public _router:Router) { }

  onClickLogout()
  {
    localStorage.clear();
    this._router.navigate(['']);
  }
  onclickBack()
  {
    this._router.navigate(['home']);
  }
  onClick(item)
  {
    this._router.navigate(['/past_order_details',item.bill_id]);
  }
  ngOnInit() {

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._ser.getOrder(localStorage.getItem('email_id')).subscribe(
      (data:any[])=>
      {
         console.log(data);
        this.pastarr=data;
        this.dataSource.data=this.pastarr;
      }
    );
  }

}
