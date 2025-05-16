import {Component, ViewEncapsulation} from '@angular/core';
import {WalletComponent} from '../../components/wallet/wallet.component';
import {ProductsListComponent} from '../../components/products-list/products-list.component';
import {ShoppingCartComponent} from '../../components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-principal.view',
  imports: [
    WalletComponent,
    ProductsListComponent,
    ShoppingCartComponent
  ],
  templateUrl: './principal.view.component.html',
  styleUrl: './principal.view.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PrincipalViewComponent {

}
