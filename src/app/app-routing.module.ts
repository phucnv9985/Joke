import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokeComponent} from './joke/joke.component';
import {JokeListComponent} from './joke-list/joke-list.component';

const routes: Routes = [
    {path:'', redirectTo: '/jokes',pathMatch:'full'},
    {path:'joke', component: JokeComponent},
    {path:'jokes', component: JokeListComponent}
];
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule {}
