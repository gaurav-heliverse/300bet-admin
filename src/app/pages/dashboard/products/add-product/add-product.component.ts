import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm : any;

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.addProductForm = this._fb.group({
      brand : [''],
      category : [''],
      subcategory : [''],
      product_img : [],
      product_info : this._fb.group({
        product_name  : [''],
        product_title  : [''],
        retail_price  : [''],
        alternate_price  : [''],
        ticket_one_price  : [''],
        ticket_five_price  : [''],
        is_special  : [''],

      })
    })
  }

}
