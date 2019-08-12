import { Component, OnInit } from '@angular/core';
import { DishService } from '../service_model/dish.service';
import { FormGroup, FormControl } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({
  selector: 'app-extraa',
  templateUrl: './extraa.component.html',
  styleUrls: ['./extraa.component.css']
})
export class ExtraaComponent implements OnInit {

  selectedFile:File=null;
  selectedFile1:File=null;

  fg:FormData;

  constructor(public dis_ser:DishService) { }

  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
    //this.fg.value['img']=this.selectedFile;

  }


  onChange1(value)
  {
    this.selectedFile1=<File>value.target.files[0];
    //this.fg.value['pdf']=this.selectedFile1;

  }

  onsubmit()
  {
    console.log("submitted");

    this.fg.append('img',this.selectedFile,this.selectedFile.name);
    this.fg.append('pdf',this.selectedFile1,this.selectedFile1.name);

    console.log(this.fg);

    this.dis_ser.extra(this.fg).subscribe(
      (data:any)=>
      {
        console.log(data);
      }
    );

  }

  ngOnInit() {
    this.fg=new FormData();
  }

}
