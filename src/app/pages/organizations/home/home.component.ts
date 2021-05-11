import { FbBaseService } from './../../../services/fb-base.service';
import { Organization } from './../../../shared/models/organization.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  orgList: Observable<Organization[]> | null = null;

  constructor(private service: FbBaseService) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.orgList = this.service.get('organizations');
  }

}
