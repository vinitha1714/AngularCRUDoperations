import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {User} from '../user';
import {CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
   addResult: Boolean = false;
   customer: User;
   addCust: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private customerService: CustomerServiceService) { }

  ngOnInit() {
    this.addCust=this.formBuilder.group({
      fname:['',[Validators.required,Validators.minLength(4)]],
      lname:['',],
      email:['', ],
      phone:['',],
      pwd:['',]
    });
    // this.selected=this.customerService.editUser(customer);
    this.customer=this.customerService.selected;
    console.log(this.customer);
    if(this.customer==null){
      return this.addCust;
    }
    else{
      this.addCust.controls['fname'].setValue(this.customer.firstName);
      this.addCust.controls['lname'].setValue(this.customer.lastName);
      this.addCust.controls['email'].setValue(this.customer.email);
      this.addCust.controls['phone'].setValue(this.customer.phone);
      this.addCust.controls['pwd'].setValue(this.customer.password);
    }
  }

  addCustomer(data){
    console.log(data);
    this.addCust.reset();
    const user = new User();
    user.firstName = data.fname;
    user.lastName = data.lname;
    user.email = data.email;
    user.phone = data.phone;
    user.password = data.pwd;     
    this.addResult = this.customerService.addUser(user);
    if(this.addResult === true) {
      alert('User Added Successfully');
      this.router.navigate(['result']);
    }
     else {
      alert('User not added');
      this.router.navigate(['register']);
    }
  }

}
