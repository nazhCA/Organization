import { FormControl, FormGroup } from '@angular/forms';

export function getIdentifierForm(typeText: string, valueDefault?: string): FormGroup {
    return new FormGroup({
        type: new FormGroup({
            text: new FormControl(typeText)
        }),
        value: new FormControl(valueDefault)
    });
}