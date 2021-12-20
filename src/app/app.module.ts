import { NgModule } from '@angular/core';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import { MaterialModule } from './material/material.module';
 import { FormModule } from './form/form.module';

 import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MHA101AssesmentComponent } from './mha101-assesment/mha101-assesment.component';
import { FormPart1Component } from './mha101-assesment/form-part1/form-part1.component';
import { FormPart2Component } from './mha101-assesment/form-part2/form-part2.component';
import { FormPart3Component } from './mha101-assesment/form-part3/form-part3.component';

@NgModule({
  declarations: [
    AppComponent,
    MHA101AssesmentComponent,
    FormPart1Component,
    FormPart2Component,
    FormPart3Component
  ],
  imports: [
    BrowserModule,
    FormModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
