import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrgCardModule } from './../org-card/org-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeRoutingModule } from './home-routing.module';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule, CommonModule, MatCardModule, MatIconModule, MatButtonModule, OrgCardModule, ContainerModule,
    MatToolbarModule, RouterModule, MatDialogModule, MatFormFieldModule, FormsModule, ReactiveFormsModule
  ]
})
export class HomeModule { }
