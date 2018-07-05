import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorDisplay: boolean = false;
  errorMsg: string;

  login: any = [
    {
      username: "Testuser",
      password: "Testuser1234"
    },
    {
      username: "Guestuser",
      password: "Guestuser1234"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignIn(e) {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    for (let i = 0; i < this.login.length; i++) {
      if (this.login[i].username == username && this.login[i].password == password) {
        this.router.navigateByUrl('/repository/home');
      }else {
        this.errorDisplay = true;
        this.errorMsg = "Invalid Credentials"
      }
    }
  }


}
