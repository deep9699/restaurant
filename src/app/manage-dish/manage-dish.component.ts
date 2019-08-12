import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { dish } from "../Class_models/dish_class";
import { DishService } from '../service_model/dish.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-dish',
  templateUrl: './manage-dish.component.html',
  styleUrls: ['./manage-dish.component.css']
})
export class ManageDishComponent implements OnInit {
  ip=localStorage.getItem('ipaddress');
  arr:dish[]=[];
  i:number;
  displayedColumns: string[] = ['Action','Dish_Id','Dish_Name','Dish_price','Dish_img','Cusine_Id','Update'];
  dataSource=new MatTableDataSource();
  delarr:dish[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(private _xyz:DishService,private _router:Router) { }
  checkChange(item:dish)
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
onclickupdate(id:number)
{
  this._router.navigate(['/dish/update_dish',id]);
}
onclickbill()
{
  this._router.navigate(['admin']);
}
onclickdish()
{
  this._router.navigate(['dish']);
}

onclickadd()
{
  this._router.navigate(['/dish/adddish']);
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

onClickLogout()
{
  this._router.navigate(['']);
}

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this._xyz.getDish().subscribe(
      (data:dish[])=>
      {
        this.arr=data;
        this.dataSource.data=this.arr
       }
    );
  }

}
