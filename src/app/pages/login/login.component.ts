import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }


  loginUser(): void {
    this.fireAuth.signInWithEmailAndPassword(this.form.value.email, this.form.value.password).
    then((result) => {
      this.router.navigateByUrl('home');
    }).catch((error) => {
      window.alert(error.message);
    });
  }

}
