import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

export function getUserForm(): FormGroup {
    return new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        nickname: new FormControl('', Validators.required),
        password1: new FormControl('', [Validators.required, Validators.minLength(6)]),
        password2: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
}