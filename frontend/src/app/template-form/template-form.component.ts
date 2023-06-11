import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  // init phone and name
  name:string="";
  phone:string="";
  email:string="";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  async submitForm(form:NgForm){

    if (this.name && this.phone && this.email) {
      const resp = await this.http.post("http://0.0.0.0:3000/form-data", {name:this.name, phone:this.phone, email:this.email}).toPromise();
      console.log(resp)
      alert('Form submitted successfully!');
    }
  }



}
