import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule, CommonModule, MatCardModule, MatIconModule, MatButtonModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
