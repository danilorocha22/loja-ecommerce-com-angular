import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestalhesDoProdutoComponent } from './destalhes-do-produto/destalhes-do-produto.component';
import { ProdutosComponent } from './produtos.component';

const ROUTES: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DestalhesDoProdutoComponent }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
