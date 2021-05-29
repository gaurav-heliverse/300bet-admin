import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
// import { UploadGameComponent } from './upload-game/upload-game.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // gameAddDialog(){
  //   const dialogRef = this.dialog.open(UploadGameComponent, {
  //     width : '100%',
  //     height : '90vh'
  //   });
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
    
  // }

}
