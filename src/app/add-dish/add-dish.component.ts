import { Component, OnInit } from '@angular/core';
import { DishService } from "../service_model/dish.service";
import { Router } from '@angular/router';
import { cusine } from '../Class_models/cusine_class';
import { CusinesService } from '../service_model/cusines.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  dish_name:string;
  dish_price:number;
  cusine_id:number;
  cusines:cusine[]=[];
  selected:cusine;
  selectedFile:File=null;
  constructor(private _ser:DishService,private _router:Router,private cus_ser1:CusinesService) { }

  ngOnInit() {
    this.cus_ser1.getCusine().subscribe(
      (data:cusine[])=>
      {
        this.cusines=data;
      }
    );
  }
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }
  onback()
  {
    this._router.navigate(['dish']);
  }
  onsign()
  {
    console.log(this.selected);
    const fd=new FormData();
    fd.append('dish_name',this.dish_name);
    fd.append('dish_price',this.dish_price.toString());
    fd.append('dish_img',this.selectedFile,this.selectedFile.name);
    fd.append('cusine_id',this.selected.toString());
    console.log(fd);
    this._ser.addDish(fd).subscribe(
      (data:any)=>{
        alert("Dish added .");
        console.log(data);
        this._router.navigate(['dish']);
      }
    );
  }
}
