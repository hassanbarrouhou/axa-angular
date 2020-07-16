import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrastlewarkComponent } from '../component/brastlewark.component';
import { GnomTownComponent } from '../gnomTown/gnom-town.component';
import { RouterModule } from '@angular/router';
import { BrastlewarkRouting } from './brastlewark.routing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileComponent } from '../component/user-profile/user-profile.component';



@NgModule({
  declarations: [BrastlewarkComponent, GnomTownComponent, UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(BrastlewarkRouting),
    RouterModule,
    FormsModule,
    BrowserModule
  //  BrastlewarkRoutingModule
  ],
  exports: [RouterModule]
})
export class BrastlewarkModule { }
