import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [routedComponents,],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AdminRoutingModule,
    SharedModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
