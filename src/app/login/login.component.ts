import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:any;

  constructor(private formBuilder: FormBuilder,private router: Router) { }
                                                                                                                                                                   
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      uname:['',Validators.required],
      pwd:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  loginUser(data){
    console.log(data.uname);
    if (data.uname == "user" && data.pwd == "upassword") {
      alert("Login Successful");
      this.router.navigate(['result']);
   }
  }

}
