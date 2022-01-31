import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'pm-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  user = new User();

  constructor(private fb: FormBuilder, private router: Router) {  }

  ngOnInit(): void { 
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(12)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      address: ['', [Validators.required]],
      imageUrl: ''
    }) 
  }

  save(): void {
    console.log(this.userForm);
  }

  populateTestData():void{
    this.userForm.setValue({
      username: 'Jack Rouge',
      password: '123JackRouge',
      phoneNumber: '1234567890',
      address: 'Italy',
      imageUrl: ''
    });
  }

  onBack(): void{
    this.router.navigate(['/Main']);
  }

}
