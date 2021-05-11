import { UserRegComponent } from './../user-reg/user-reg.component';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: { title: 'Bejelentkezés' }
    },
    {
        path: 'registration',
        component: UserRegComponent
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule { }
