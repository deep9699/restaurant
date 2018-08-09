import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-form-demo',
  templateUrl: './sign-form-demo.component.html',
  styleUrls: ['./sign-form-demo.component.css']
})
export class SignFormDemoComponent implements OnInit {
email:string="";
fname:string="";
  constructor() { }

  ngOnInit() {
  }
  addForm(item){
    console.log(item);
  }

}
