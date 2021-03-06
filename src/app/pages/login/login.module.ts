import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, LoginRoutingModule, MatCardModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
