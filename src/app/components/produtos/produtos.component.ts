import { ActivatedRoute } from '@angular/router';
import { IProduto } from './../../types/produtos';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './../../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined

  constructor(
    private produtosService: ProdutosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const PRODUTOS = this.produtosService.getAll()

    this.activatedRoute.queryParamMap.subscribe(params => {
      const DESCRICAO = params.get('descricao')?.toLowerCase()

      if (DESCRICAO) {
        this.produtos = PRODUTOS.filter(p => p.descricao.toLowerCase().includes(DESCRICAO))
        return
      }

      this.produtos = PRODUTOS
    })
  }

}
