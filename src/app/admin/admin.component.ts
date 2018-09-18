import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { bill } from "../Class_models/bill_class";
import { BillService } from '../service_model/bill.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  arr:bill[]=[];
  i:number;
  displayedColumns: string[] = ['Action','Date','Amount','User_Id'];
  dataSource=new MatTableDataSource();
  delarr:bill[]=[];

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(private _xyz:BillService,private _router:Router) { }

  checkChange(item:bill)
{

   if (this.delarr.find(x => x == item)) {
     this.delarr.splice(this.delarr.indexOf(item), 1)
     } else {
     this.delarr.push(item);
    }
    console.log(item);
}

onclickcusine()
{
  this._router.navigate(['cusine']);
}
// onclickdeleteAll()
// {

//    this._xyz.(this.delarr).subscribe(
//      (data:any)=>
//      {
//        for (this.i = 0; this.i < this.delarr.length; this.i++) {
//          if (this.arr.find(x => x == this.delarr[this.i])) {
//          this.arr.splice(this.arr.indexOf(this.delarr[this.i]), 1);
//          }
//        }
//        this.dataSource.data=this.arr;
//      }
//    );
// }

onclickbill()
{
  this._router.navigate(['admin']);
}
onclickdish()
{
  this._router.navigate(['dish']);
}
onClickLogout()
{
  this._router.navigate(['']);
}
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this._xyz.getBill().subscribe
    (
      (data:bill[])=>
      {
        console.log(data);
        this.arr=data;
        this.dataSource.data=this.arr;
      }
    );
  }

}
