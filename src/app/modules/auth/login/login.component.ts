import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../../configuration/core/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  defaultUser: {user: string, password: string} = {
    user: "davidcalderon700@gmail.com",
    password: "secret"
  }

  form!: FormGroup;
  constructor(private fb: FormBuilder,
              private storage: StorageService,
              private router: Router) {
    if(this.storage.getUserLogged()){
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    //this.defaultUser = {};
    this.form = this.fb.group({
      user: [this.defaultUser?.user, [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: [this.defaultUser?.password, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
      }
    );
  }

  onSubmit() {
    console.log(this.form)
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log("Formulario inválido");
      return;
    }
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.form.controls[controlName];
    if (!control) {
      return false;
    }

    return control.hasError(validationType) && (control.dirty || control.touched);
  }

}