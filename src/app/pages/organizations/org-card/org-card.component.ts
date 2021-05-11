import { AddComponent } from './../add/add.component';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Organization } from './../../../shared/models/organization.model';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-org-card',
  templateUrl: './org-card.component.html',
  styleUrls: ['./org-card.component.scss']
})
export class OrgCardComponent implements OnInit {

  @Input() org?: Organization;

  constructor(private service: FbBaseService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteRecord(org: Organization): void {
    this.service.delete('organizations', this.org?.identifier[0].value as string);
  }

  openDialog(localId?: string): void {
    const dialogRef = this.dialog.open(AddComponent, {
      data: {
        id: localId
      }
    });
    console.log('Org-card id: ', localId);
    // tslint:disable-next-line: deprecation
    // dialogRef.afterClosed().subscribe((org: Organization) => {
    //   console.log(org);
    //   if (org?.identifier[0].value) {
    //     this.service.add('oragnizations', org);
    //   }
    // }, err => {
    //   console.warn(err);
    // });
  }

}
