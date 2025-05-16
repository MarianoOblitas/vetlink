import { Component } from '@angular/core';
import {PurchaseButtonComponent} from '../../../../shared/buttons/purchase-button/purchase-button.component';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    PurchaseButtonComponent
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

}
