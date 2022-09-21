import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';

const ROUTES: Routes = [
  { path: 'produtos', loadChildren: () => import('./components/produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'carrinho', loadChildren: () => import('./components/carrinho-de-compras/carrinho-de-compras.module').then(m => m.CarrinhoDeComprasModule) },
  { path: 'contato', loadChildren: () => import('./components/contato/contato.module').then(m => m.ContatoModule) },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
