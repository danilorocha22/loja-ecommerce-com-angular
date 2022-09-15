import { CarrinhoService } from './../../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from './../../../services/notificacao.service';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto, ItemCarrinho } from './../../../types/produtos';

@Component({
  selector: 'app-destalhes-do-produto',
  templateUrl: './destalhes-do-produto.component.html',
  styleUrls: ['./destalhes-do-produto.component.css']
})
export class DestalhesDoProdutoComponent implements OnInit {
  produto: IProduto | undefined
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const ROUTE_PARAMS = this.route.snapshot.paramMap
    const PRODUCT_ID = Number(ROUTE_PARAMS.get('id'))
    this.produto = this.produtosService.getOne(PRODUCT_ID)
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("Produto adicionado")
    const item: ItemCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarItemNoCarrinho(item)
  }

}
