import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrastlewarkComponent } from '../component/brastlewark.component';
import { GnomTownComponent } from '../gnomTown/gnom-town.component';

export const BrastlewarkRouting: Routes = [
  {
    path: '', component: GnomTownComponent, children: [
      { path: '', component: BrastlewarkComponent },
      ]
  }
];