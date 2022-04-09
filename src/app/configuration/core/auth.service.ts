import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private storage: StorageService) {
    this.authSubject.next(this.storage.getUserLogged());
  }

  get getAuth():any{
    return this.authSubject.value;
  }

  set setAuth(user:any){
    if(user){
      this.authSubject.next(user);
    }
  }
}
