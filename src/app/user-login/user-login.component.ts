import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm: FormGroup;
  username: string = "";
  password: string = "";

  constructor(private fb: FormBuilder, private router: Router) {  }

  ngOnInit(): void { 
    this.userLoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }) 
  }

  login(): void {
    console.log(this.userLoginForm);
  }

  onBack(): void{
    this.router.navigate(['/Main']);
  }

}
