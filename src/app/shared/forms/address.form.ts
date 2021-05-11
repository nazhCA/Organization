import { FormGroup, FormControl } from '@angular/forms';

export function getAddressForm(text?: string): FormGroup {
    return new FormGroup({
        text: new FormControl(text)
    });
}