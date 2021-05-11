import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getUserForm } from 'src/app/shared/forms/user.form';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})

export class UserRegComponent implements OnInit {

  form: FormGroup | null = null;
  user: User = new User();
  password = '';

  constructor(private service: FbBaseService, private router: Router) { }

  ngOnInit(): void {
    this.form = getUserForm();
  }

  registerUser(): void {
    if (this.form?.value.password1 === this.form?.value.password2){
      this.user = this.createUserFromForm(this.user)
      this.service.addUser('users', this.user, this.password, this.user.email);
      this.router.navigateByUrl('./login');
    }
  }

  createUserFromForm(user: User): User{
    user.email = this.form?.value.email;
    this.password = this.form?.value.password1;
    user.nickname = this.form?.value.nickname;
    return user;
  }

}
