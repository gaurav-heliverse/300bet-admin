import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailmarketingComponent } from './emailmarketing.component';

const routes: Routes = [{ path: '', component: EmailmarketingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailmarketingRoutingModule { }
