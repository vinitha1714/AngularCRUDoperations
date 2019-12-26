import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerServiceService } from '../customer-service.service';
import { User } from '../user';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public customers;
  constructor(private router:Router, private customerService: CustomerServiceService) { }

  ngOnInit() {
    this.customerService.getUsers().subscribe(data => { this.customers = data });
    console.log(this.customers);
  }

  addUserButton():void{
  this.router.navigate(['register']);
  }

  deleteUserButton(customer: User) {  
    this.customerService.deleteUser(customer.firstName).subscribe(data =>{ this.customers = data });
    }

  editUserButton(customer: User) {
    console.log(customer.firstName);
    this.customerService.editUser(customer.firstName);
    this.router.navigate(['register']);
  }
}
