import { Component, OnInit } from '@angular/core';
import { DishService } from "../service_model/dish.service";
import { Router,ActivatedRoute, Params } from "@angular/router";
import { dish } from '../Class_models/dish_class';


@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit {

  dish_id:number;
  dish_name:string;
  dish_price:number;
  dish_img:string;
  cusine_id:number;
  constructor(private _ser:DishService,private _rot:Router,private _act:ActivatedRoute) { }

  onupdate()
  {
    this._ser.updateDish(new dish(this.dish_id,this.dish_name,this.dish_price,this.dish_img,this.cusine_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this._rot.navigate(['dish']);
      }
    );
  }
  onback()
  {
    this._rot.navigate(['dish']);
  }
  ngOnInit() {
        this.dish_id=this._act.snapshot.params['id'];
        this._ser.getDishById(this.dish_id).subscribe(
          (data:dish[])=>
          {

            this.dish_name=data[0].dish_name;
            this.dish_price=data[0].dish_price;
            this.dish_img=data[0].dish_img;
            this.cusine_id=data[0].fk_cusine_id;
            console.log(this.dish_name);
          }
        );

  }

}
