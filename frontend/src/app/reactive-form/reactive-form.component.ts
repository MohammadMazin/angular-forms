import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  async submitForm() {
    if (this.form.valid) {
      const resp = await this.http
        .post('http://0.0.0.0:3000/form-data', {
          name: this.form.controls['name'].value,
          phone: this.form.controls['phone'].value,
          email: this.form.controls['email'].value,
        })
        .toPromise();
      console.log(resp);
      alert('Form submitted successfully!');
    }
  }
}
