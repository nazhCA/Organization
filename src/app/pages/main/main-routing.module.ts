import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        data: { title: 'Belépés - Regisztráció'},
        children: [
            {
                path: 'login',
                loadChildren: () => import('./../login/login.module').then(m => m.LoginModule),
            },
            {
                path: 'registration',
                loadChildren: () => import('./../user-reg/user-reg-routing.module').then(m => m.UserRegRoutingModule),
            }
        ]
        
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule { }
