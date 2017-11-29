import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokeComponent} from './joke/joke.component';
import {JokeListComponent} from './joke-list/joke-list.component';
import {SignupFormComponent} from './signup-form/signup-form.component'

const routes: Routes = [
    {path:'', redirectTo: '/signup',pathMatch:'full'},
    {path:'joke', component: JokeComponent},
    {path:'jokes', component: JokeListComponent},
    {path:'signup', component: SignupFormComponent}
];
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule {}
