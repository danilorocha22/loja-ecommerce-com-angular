import { CarrinhoService } from './../../services/carrinho.service';
import { ItemCarrinho } from './../../types/produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.component.html',
  styleUrls: ['./carrinho-de-compras.component.css']
})
export class CarrinhoDeComprasComponent implements OnInit {
  itensCarrinho: ItemCarrinho[] = []
  totalCarrinho: number = 0


  constructor(
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho()
    this.calcularTotalCarrinho()
  }

  removerItemDoCarrinho(itemId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id  !== itemId)
    this.calcularTotalCarrinho()
    this.carrinhoService.removerItemDoCarrinho(itemId)
  }

  calcularTotalCarrinho() {
    this.totalCarrinho = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  comprar() {
    throw new Error('Method not implemented.');
    }

}
