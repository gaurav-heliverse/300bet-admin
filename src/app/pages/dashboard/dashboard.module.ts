import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {HeaderComponent} from "./../../shared/components/header/header.component"
import {SidebarComponent} from "./../../shared/components/sidebar/sidebar.component"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatSidenavModule} from '@angular/material/sidenav';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports : [
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
