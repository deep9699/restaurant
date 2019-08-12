import { Component, OnInit } from '@angular/core';
import { CusinesService } from "../../service_model/cusines.service";
import { Router,ActivatedRoute } from "@angular/router";
import { cusine } from 'src/app/Class_models/cusine_class';


@Component({
  selector: 'app-update-cusine',
  templateUrl: './update-cusine.component.html',
  styleUrls: ['./update-cusine.component.css']
})
export class UpdateCusineComponent implements OnInit {

  cusine_id:number;
  cusine_name:string;
  constructor(private _ser:CusinesService,private _router:Router,private _act:ActivatedRoute) { }

  onback()
  {
    this._router.navigate(['cusine']);
  }
  onupdate()
  {
    this._ser.updateCusine(new cusine(this.cusine_id,this.cusine_name)).subscribe(
      (data:any)=>
      {
        console.log(data);
        alert("Cusine Updated");
        this._router.navigate(['cusine']);
      }
    );
  }
  ngOnInit() {
    this.cusine_id=this._act.snapshot.params['id'];
    console .log(this.cusine_id);
    this._ser.getCusineById(this.cusine_id).subscribe(
      (data:cusine[])=>
      {
        this.cusine_name=data[0].cusine_name;
      }
    );

  }

}
