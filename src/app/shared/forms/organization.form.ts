import { Type } from './../models/type.model';
import { getAddressForm } from 'src/app/shared/forms/address.form';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { getIdentifierForm } from './identifier.form';
import {getContactPoint} from './contact-point.form'


export function getOrganizationForm(uniqueNameDefault?: string, activeDefault?: boolean,
                                    typeDefault?: string,  nameDefault?: string,
                                    emailDefault?: string, phoneDefault?: string, addressDefault?: string[]): FormGroup {
    return new FormGroup({
        identifier: new FormArray([
            getIdentifierForm('uid'),
            getIdentifierForm('value', uniqueNameDefault)
        ]),

        active: new FormControl(activeDefault),
        type: new FormControl(typeDefault),
        name: new FormControl(nameDefault, Validators.required),
        aliases: new FormArray([]),

        telecom: new FormArray([
            getContactPoint('email', emailDefault),
            getContactPoint('phone', phoneDefault),
        ]),

        address: new FormArray([])
    });
}