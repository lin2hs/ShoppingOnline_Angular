import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  name: string;
  password: string;
  invalidLogin = false;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    // this.username;
    // this.password;
  }

  @HostListener('window:beforeunload') goToAdmin() {
    this.router.navigate(['user/index']);
  }

  @HostListener('window:beforeunload') goToUser() {
    this.router.navigate(['/']);
  }

  signup() {
    this.router.navigate(['register'])
  }

  login() {
    //   if (this.userService.login(this.username, this.password)) {
    //     this.router.navigate([''])
    //     this.invalidLogin = false
    //   } else
    //     this.invalidLogin = true
    // }
    this.userService.login(this.name, this.password).then(data => {
      alert("Login successfully!");
      if (data.role == "ROLE_ADMIN") {
        this.goToAdmin();
      }

      if (data.role == "ROLE_USER") {
        this.goToUser();
      }
    }).catch(err => {
      alert(err);
    })
  }
}
