import { FbBaseService } from 'src/app/services/fb-base.service';
import { Organization } from './../../../shared/models/organization.model';
import { Observable } from 'rxjs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormArray, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { getIdentifierForm } from 'src/app/shared/forms/identifier.form';
import { getOrganizationForm } from 'src/app/shared/forms/organization.form';
import { Type } from 'src/app/shared/models/type.model';
import { TYPES } from 'src/app/shared/database/organization-types.database';
import { ActivatedRoute, Router } from '@angular/router';
import { getAddressForm } from 'src/app/shared/forms/address.form';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  inData: Observable<Organization> | null = null;
  org: Organization = new Organization();
  types: Type[] = TYPES;
  form: FormGroup | null = null;
  addressCount = 0;
  formArray: FormArray | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public inId: any,
    private dialogRef: MatDialogRef<AddComponent>, private route: ActivatedRoute,
              private service: FbBaseService, private router: Router
    ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.getOrg();
  }

  getOrg(): void{
    this.inData = this.service.getById(this.inId.id);
    this.inData.subscribe(org => {
      this.org = org;
      this.form = getOrganizationForm(org.identifier[1].value, org.active, org.type, org.name, org.telecom[0].value, org.telecom[1].value);
      this.addressCount = this.org.address.length;
      for (let i = 0; i < this.addressCount; i++){
        this.addAddress(org.address[i].text);
      }
    });
  }

  get getAddress(): FormArray{
    return this.form?.get('address') as FormArray;
  }

  addAddress(addressText?: string): void {
    this.formArray = this.form?.get('address') as FormArray;
    this.formArray.push(getAddressForm(addressText));
  }
  removeAddress(index: number): void {
    const formArray = this.form?.get('address') as FormArray;
    formArray.removeAt(index);
  }

  updateRecord(): void {
    TYPES.forEach((value, index) => {
      if (value.value === this.form?.value.type) {
        // this.org = value.viewValue;
      }
    });
    this.org = this.form?.value;
    this.org.identifier[0].value = this.inId.id;
    console.log(this.inId);
    this.service.update('organizations', this.inId.id as string, this.org);
    this.router.navigateByUrl('home');
  }
}
