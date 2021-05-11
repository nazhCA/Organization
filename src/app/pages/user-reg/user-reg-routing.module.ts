import { UserRegModule } from './user-reg.module';
import { UserRegComponent } from './user-reg.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: UserRegComponent,
        data: { title: 'Regisztráció' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRegRoutingModule { }
