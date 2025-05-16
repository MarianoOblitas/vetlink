import { Routes } from '@angular/router';
import {PrincipalViewComponent} from './features/principal/views/principal.view/principal.view.component';

export const routes: Routes = [
  {path:'principal', component:PrincipalViewComponent},
  {path:'', redirectTo:'/principal',pathMatch:'full'},
  {path:'**', redirectTo:'/principal',pathMatch:'full'}
];
