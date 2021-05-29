import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {HeaderComponent} from "./shared/components/header/header.component"
// import {SidebarComponent} from "./shared/components/sidebar/sidebar.component"
import { DashboardModule } from './pages/dashboard/dashboard.module'
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatButtonModule} from "@angular/material/button"
// import {MatIconModule} from "@angular/material/icon"
// import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    // SidebarComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
    // MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
