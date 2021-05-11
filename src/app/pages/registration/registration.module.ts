import { RegistrationRoutingModule } from './registration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatCardModule } from '@angular/material/card';
import { RegistrationComponent } from './registration.component';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule, RegistrationRoutingModule, MatCardModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatChipsModule, MatCheckboxModule, MatSelectModule, MatIconModule, MatButtonModule
  ],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
