import { Router } from '@angular/router';
import { FbBaseService } from './../../services/fb-base.service';
import { Type } from './../../shared/models/type.model';
import { TYPES } from './../../shared/database/organization-types.database';
import { FormArray, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {getOrganizationForm} from './../../shared/forms/organization.form';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { getAddressForm } from 'src/app/shared/forms/address.form';
import { Organization } from 'src/app/shared/models/organization.model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  types: Type[] = TYPES;
  form: FormGroup | null = null;
  org: Organization | null = null;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  aliases: string[] = [];

  constructor(private service: FbBaseService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  // tslint:disable-next-line: typedef
  initForm(){
    this.form = getOrganizationForm();
  }

  registration(): void {
    TYPES.forEach((value, index) => {
      if (value.value === this.form?.value.type) {
        // this.org = value.viewValue;
      }
    });
    this.org = this.form?.value;
    this.service.add('organizations', this.org as Organization);
    this.router.navigateByUrl('home');
  }

  addAddress(): void {
    const formArray = this.form?.get('address') as FormArray;
    formArray.push(getAddressForm());
  }

  get getAddress(): FormArray{
    return this.form?.get('address') as FormArray;
  }

  removeAddress(index: number): void {
    const formArray = this.form?.get('address') as FormArray;
    formArray.removeAt(index);
  }

    // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our alias
  //   if ((value || '').trim()) {
  //     this.aliases.push(value.trim());
  //     console.log(this.aliases)
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }
  // remove(alias: string): void {
  //   const index = this.aliases.indexOf(alias);

  //   if (index >= 0) {
  //     this.aliases.splice(index, 1);
  //   }
  // }

}
