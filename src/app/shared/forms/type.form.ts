import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';


export function getTypeForm(): FormGroup {
    return new FormGroup({
        value: new FormControl(),
        viewValue: new FormControl()
    });
}