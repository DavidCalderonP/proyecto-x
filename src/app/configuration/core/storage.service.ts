import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public storeLoggedUser(user:any){
    if(user){
      localStorage.setItem("authenticated",JSON.stringify(user))
    }
  }

  public getUserLogged(){
    const item = localStorage.getItem("authenticated");
    return item ? JSON.parse(item) : null;
  }
}
