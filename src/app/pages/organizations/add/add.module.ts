import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule, MatCardModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatChipsModule, MatCheckboxModule, MatSelectModule, MatIconModule, MatButtonModule
  ],
  exports: [AddComponent]
})
export class AddModule { }
