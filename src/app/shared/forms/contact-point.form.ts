import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

export function getContactPoint(system: string, valueDefault?: string): FormGroup {
    if (system === 'email'){
        return new FormGroup({
            system: new FormControl(system),
            value: new FormControl(valueDefault,Validators.email)
        });
    } else {
        return new FormGroup({
            system: new FormControl(system),
            value: new FormControl(valueDefault)
    });
}
}
