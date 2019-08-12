import { Component, OnInit } from '@angular/core';
import { customer } from "../Class_models/customer_class";
import { CustomerService } from "../service_model/customer.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  flag:boolean=true;
  email_id1:string;
  password1:string="";
  constructor(private _ser:CustomerService,private _router:Router)
   {
  }


  onclicklogin()
  {
    console.log(this.email_id1,this.password1);

    this._ser.getCustomerByLogin(new customer(this.email_id1,this.password1)).subscribe(
      (data:customer[])=>
      {
          console.log(data);
          if(data.length==1)
          {
            localStorage.setItem('email_id',this.email_id1);
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
onclickAdmin()
{
  this._router.navigate(['/admin']);
}

str:string;
  ngOnInit() {
    /*var ip=window.location.origin;
    var url=ip+'/api/';
    var endpoint='test/';

    this._http.get(url+endpoint).subscribe(data=>{this.result=data['test']});*/
    console.log(window.location.origin);
    this.str=window.location.origin.toString();
    this.str=this.str.substring(7,this.str.length);
    this.str=this.str.substring(0,this.str.length-5);
    localStorage.setItem('ipaddress',this.str);
    console.log(this.str);
  }

}


