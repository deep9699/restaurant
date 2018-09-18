import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { CusinesService } from "../service_model/cusines.service";
import { Router } from "@angular/router";
import { cusine } from '../Class_models/cusine_class';

@Component({
  selector: 'app-manage-cusine',
  templateUrl: './manage-cusine.component.html',
  styleUrls: ['./manage-cusine.component.css']
})
export class ManageCusineComponent implements OnInit {
  arr:cusine[]=[];
  i:number;
  displayedColumns: string[] = ['Action','Cusine_Id','Cusine_Name','Update'];
  dataSource=new MatTableDataSource();
  delarr:cusine[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(private _xyz:CusinesService,private _router:Router) { }
  checkChange(item:cusine)
{

   if (this.delarr.find(x => x == item)) {
     this.delarr.splice(this.delarr.indexOf(item), 1)
     } else {
     this.delarr.push(item);
    }
    console.log(item);
}
onclickupdate(id:number)
{
  this._router.navigate(['update_cusine',id]);7
}
onclickdeleteAll()
{

  this._xyz.deleteAll(this.delarr).subscribe(
    (data:any)=>
    {
      console.log(data);
      for (this.i = 0; this.i < this.delarr.length; this.i++) {
        if (this.arr.find(x => x == this.delarr[this.i])) {
        this.arr.splice(this.arr.indexOf(this.delarr[this.i]), 1);
        }
      }
      this.dataSource.data=this.arr;
    }
  );
}

  onclickdish()
  {
    this._router.navigate(['dish']);
  }
  onclickcusine()
  {
    this._router.navigate(['cusine']);
  }
  onclickbill()
{
  this._router.navigate(['admin']);
}

onClickLogout()
{
  this._router.navigate(['']);
}
onclickadd()
{
  this._router.navigate(['add_cusine']);
}

  ngOnInit() {

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this._xyz.getCusine().subscribe(
      (data:cusine[])=>
      {
        this.arr=data;
        this.dataSource.data=this.arr;
      }
    );
  }

}
