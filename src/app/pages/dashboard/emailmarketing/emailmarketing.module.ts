import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailmarketingRoutingModule } from './emailmarketing-routing.module';
import { EmailmarketingComponent } from './emailmarketing.component';


@NgModule({
  declarations: [
    EmailmarketingComponent
  ],
  imports: [
    CommonModule,
    EmailmarketingRoutingModule
  ]
})
export class EmailmarketingModule { }
