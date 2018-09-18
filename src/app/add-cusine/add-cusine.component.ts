import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CusinesService } from "../service_model/cusines.service";
import { cusine } from '../Class_models/cusine_class';

@Component({
  selector: 'app-add-cusine',
  templateUrl: './add-cusine.component.html',
  styleUrls: ['./add-cusine.component.css']
})
export class AddCusineComponent implements OnInit {

  arr:cusine[]=[];
  cusine_name:string;
  flag:boolean=false;
  constructor(private _router:Router,private _ser:CusinesService) { }
  onadd()
  {
    for(let i=0;i<this.arr.length;i++)
    {
      if(this.arr[i].cusine_name==this.cusine_name)
      {
        this.flag=true;
        break;
      }

    }
    if(this.flag==true)
    {
      alert("Cusine already in table");
      this.flag=false;
      this._router.navigate(['cusine']);
    }
    else
    {
      this._ser.addcusine(new cusine(1,this.cusine_name)).subscribe(
        (data:any)=>
        {
          console.log(data);
          alert("cusine added.");
          this._router.navigate(['cusine']);
        }
      );
    }

  }
  onback()
  {
    this._router.navigate(['cusine']);
  }
  ngOnInit() {

    this._ser.getCusine().subscribe(
      (data:cusine[])=>
      {
        this.arr=data;
      }
    );
  }

}
