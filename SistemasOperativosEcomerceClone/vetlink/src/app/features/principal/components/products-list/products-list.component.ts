import { Component } from '@angular/core';
import {AddProductButtonComponent} from '../../../../shared/buttons/add-product-button/add-product-button.component';
import {ProductFormModalComponent} from '../product-form-modal/product-form-modal.component';

@Component({
  selector: 'app-products-list',
  imports: [
    AddProductButtonComponent,
    ProductFormModalComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

}
