import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/services/user.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name: string;
  password: string;
  email: string;
  constructor(private router: Router, private userService: UserService) { }


  ngOnInit() {
  }

  login() {
    this.router.navigate(['/login']);
  }

  signup() {
    this.userService.signup(this.name, this.password, this.email).then(data => {
      alert("Register successfully!");
      this.login();
    }).catch(err => {
      alert(err);
    })
  }

}
