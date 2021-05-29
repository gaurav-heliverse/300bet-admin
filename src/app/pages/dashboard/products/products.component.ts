import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { AddProductComponent } from './add-product/add-product.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  addFeatureProduct(){
    const dialogRef = this.dialog.open(AddProductComponent, {
      width : '1000px',
      height : '95vh'
    })
  }

}
