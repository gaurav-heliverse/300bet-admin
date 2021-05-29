import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UploadGameComponent } from './upload-game/upload-game.component';
// import { UploadGameComponent } from './upload-game/upload-game.component'

@NgModule({
  declarations: [
    GamesComponent,
    UploadGameComponent,
    // UploadGameComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatTabsModule
  ],

  // entryComponents : [UploadGameComponent]
})
export class GamesModule { }
