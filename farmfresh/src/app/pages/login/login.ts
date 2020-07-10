import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { SignupService } from "../../services/signup.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  constructor(  public signupService: SignupService,
    public router: Router

  ) { }

  login(email,password){
    this.signupService.SignIn(email.value,password.value)
    .then((res) => {
      console.log(res)
    }).catch((error) => {
      window.alert(error.message)
    })
}
}
