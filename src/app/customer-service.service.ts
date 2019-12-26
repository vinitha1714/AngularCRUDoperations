import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  public customer : User;

  public selected : User;

  public  customers : Array<User> = [];

  constructor() { }

  getUsers() : Observable<User[]>{
    return of(this.customers);
  }

  addUser(customer : User): Boolean {
    let index=this.customers.findIndex(customers => customers.firstName === customer.firstName);
    if(index!=-1){
      this.customers[index]=customer;
    }  
    else{
      this.customers.push(customer);
    }
    return true;
  }

  deleteUser(fname: String): Observable<User[]>{
    this.customers = this.customers.filter(customers => customers.firstName !== fname); 
   return of(this.customers);
  }

  editUser(fname: String){
    if(fname == null || fname == undefined){
      this.selected=null;
    }
   this.selected= this.customers.filter(customers => customers.firstName == fname)[0];
   console.log(this.selected);
  }
}
