import { AddModule } from './../add/add.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgCardComponent } from './org-card.component';


@NgModule({
  declarations: [
    OrgCardComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, AddModule
  ],
  exports: [OrgCardComponent]
})
export class OrgCardModule { }
