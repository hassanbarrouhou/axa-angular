import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GnomTownComponent } from './brastlewark/gnomTown/gnom-town.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrastlewarkComponent } from './brastlewark/component/brastlewark.component';
import { UserProfileComponent } from './brastlewark/component/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BrastlewarkComponent,
    GnomTownComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
 //   FlexLayoutModule
  ],
  exports: [
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
