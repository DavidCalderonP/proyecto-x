import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: BehaviorSubject<any>;

  constructor(private router: Router) {
    this.currentUser = new BehaviorSubject<any>(null);
  }

  get getCurrentUser(){
    const user =this.getFromStorage();
    if(user!==null){
      this.setCurrentUser(user)
    }
    return this.currentUser.value;
  }

  setCurrentUser(user: any){
    this.currentUser.next(user);
  }

  public storeUser(user: any){
    if(user){
      localStorage.setItem('authenticated', JSON.stringify(user));
      this.setCurrentUser(user);
    }
  }

  public getFromStorage(){
    const user = localStorage.getItem('authenticated')
    return user ? JSON.parse(user) : null;
  }

  public logout(){
    this.currentUser.next(null);
    localStorage.removeItem('authenticated');
  }
}
