import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../types/produtos';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const ROUTE_PARAMS = this.route.snapshot.paramMap
    const PRODUCT_ID = Number(ROUTE_PARAMS.get('id'))
    this.produto = this.produtosService.getOne(PRODUCT_ID)
  }

}
