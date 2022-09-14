import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DestalhesDoProdutoComponent } from './destalhes-do-produto/destalhes-do-produto.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    DestalhesDoProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
