import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomTownComponent } from './brastlewark/gnomTown/gnom-town.component';
import { BrastlewarkComponent } from './brastlewark/component/brastlewark.component';
import { UserProfileComponent } from './brastlewark/component/user-profile/user-profile.component';


const routes: Routes = [
 // { path: 'brastlewark', loadChildren: './brastlewark/shared/brastlewark.module#BrastlewarkRouting' }
//{ path: 'brastlewark', component: GnomTownComponent, pathMatch: 'full' }

{
  path: '', component: GnomTownComponent, children: [
    { path: '', redirectTo: BrastlewarkComponent.Route, pathMatch: 'full'},
    { path: BrastlewarkComponent.Route,  component: BrastlewarkComponent, pathMatch: 'full' },
    { path: 'user/:id',  component: UserProfileComponent, pathMatch: 'full' },
    ]
}


];

export const AppRoutingModule = RouterModule.forRoot(routes); { }
