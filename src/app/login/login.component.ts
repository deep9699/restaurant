import { Component, OnInit } from '@angular/core';
import { customer } from "./customer_class";
import { CustomerService } from "../customer.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id:string;
  password:string;
  constructor(private _ser:CustomerService,private _router:Router) { }


  onclicklogin()
  {
    this._ser.getCustomerByLogin(new customer(this.email_id,this.password)).subscribe(
      (data:customer[])=>
      {
          if(data.length==1)
          {
            localStorage.setItem('email_id',this.email_id);
            this._router.navigate(['home']);
          }
          else
          {
            alert('Email_id or Password Incorrect');
          }

      }
    );
  }
onclicknew()
{
  this._router.navigate(['newcustomer']);
}
onclickforget()
{
  this._router.navigate(['forgetpassword']);
}
  ngOnInit() {
  }

}


