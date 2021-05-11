
import { FormGroup, FormControl } from '@angular/forms';

export function getAliasForm(): FormGroup {
    return new FormGroup({
        name: new FormControl()
    });
}