import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../configuration/core/auth.service";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  defaultUser: {email: string, password: string} = {
    email: 'test@mail.com',
    password: 'secret'
  }

  form!: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private loginService: LoginService,
              private router: Router) {
    console.log("Constructor login: ", this.authService.getCurrentUser)
    if(this.authService.getCurrentUser!==null){
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    //this.defaultUser = {};

    this.form = this.fb.group({
      user: [this.defaultUser?.email, [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: [this.defaultUser?.password, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
      }
    );
  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form)
    const user = {
      email: 'test@mail.com',
      password: 'secret'
    }
    this.authService.storeUser(user)
    this.loginService.login(user).subscribe(res=>{
      console.log(res)
      this.authService.storeUser(res)
    })
    this.router.navigate(['/']);
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.form.controls[controlName];
    if (!control) {
      return false;
    }

    return control.hasError(validationType) && (control.dirty || control.touched);
  }

}
