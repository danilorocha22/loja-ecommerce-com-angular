import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CarrinhoDeComprasRoutingModule } from './carrinho-de-compras-routing.module';
import { CarrinhoDeComprasComponent } from './carrinho-de-compras.component';


@NgModule({
  declarations: [
    CarrinhoDeComprasComponent
  ],
  imports: [
    CommonModule,
    CarrinhoDeComprasRoutingModule,
    FormsModule
  ]
})
export class CarrinhoDeComprasModule { }
