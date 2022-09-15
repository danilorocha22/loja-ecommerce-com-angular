import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoDeComprasComponent } from './carrinho-de-compras.component';

const routes: Routes = [{ path: '', component: CarrinhoDeComprasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoDeComprasRoutingModule { }
