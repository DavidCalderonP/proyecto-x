import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.API;

  constructor(private http: HttpClient) { }

  login(user: any){
    return this.http.post(this.baseUrl + 'login', user);
  }
}
