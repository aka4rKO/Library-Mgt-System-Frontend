import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    if(this.loginForm.get('email').value == "akram@mail.com" 
    && this.loginForm.get('password').value == "123") {
      this.authService.login();
      this.router.navigate(['/manager/books']);
      this.loginForm.reset();
    }else{
      console.log("Invalid credentials!");
    }
  }

}
