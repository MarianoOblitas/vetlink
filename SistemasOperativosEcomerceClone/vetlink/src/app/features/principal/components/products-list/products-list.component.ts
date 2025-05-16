import { Component } from '@angular/core';
import {AddProductButtonComponent} from '../../../../shared/buttons/add-product-button/add-product-button.component';

@Component({
  selector: 'app-products-list',
  imports: [
    AddProductButtonComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

}
