import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar,
     private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit(){
    this.snackBar.open('One second, logging in..', 'Close', {
      duration: 2000,
    });
    console.log(this.loginForm);

    if (this.loginForm.value.username === 'admin') {
      //log in as admin
      console.log("First");
      this.authService.login().subscribe(result => {
        console.log("Third");
        this.router.navigate(['portal']);  
      });
  
      console.log("Second");
    }

    else {
      // Show error message or something else.
    }
      
    
  }
}
 
