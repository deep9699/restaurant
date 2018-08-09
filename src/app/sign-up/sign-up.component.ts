import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from "../service_model/customer.service";
import {SelectionModel} from '@angular/cdk/collections';
import { customer } from "../Class_models/customer_class";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email_id:string;
  password:string;
  user_name:string;
  mobile_no:string;
  age:number=0;
  city:string;
  gen:string='male';
  address:string;
  selection = new SelectionModel(true, []);
  types:string[]=['male','female'];

  constructor(private _router:Router,private _ser:CustomerService) { }


  onsign()
  {
    if(this.email_id!='' && this.password!='' && this.user_name!='' && this.age!=0 &&this.mobile_no!='' && this.city!='' && this.gen!='' && this.address)
    {
    this._ser.insertCustomer(new customer(this.email_id,this.password,this.user_name,this.age,this.mobile_no,this.city,this.gen,this.address)).subscribe(
      (data:any)=>
      {
        console.log(data);
        if(data.affectedRow==1)
        {
          alert('sign up successfully');
          this._router.navigate(['']);
        }

      }
    );
  }
}
onback()
{
  this._router.navigate(['']);
}

  ngOnInit() {
  }

}
