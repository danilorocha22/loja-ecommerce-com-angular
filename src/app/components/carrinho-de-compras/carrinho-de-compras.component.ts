import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from './../../services/carrinho.service';
import { ItemCarrinho } from './../../types/produtos';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.component.html',
  styleUrls: ['./carrinho-de-compras.component.css']
})
export class CarrinhoDeComprasComponent implements OnInit {
  itensCarrinho: ItemCarrinho[] = []
  totalCarrinho: number = 0


  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho()
    this.calcularTotalCarrinho()
  }

  removerItemDoCarrinho(itemId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== itemId)
    this.calcularTotalCarrinho()
    this.carrinhoService.removerItemDoCarrinho(itemId)
  }

  calcularTotalCarrinho() {
    this.totalCarrinho = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  comprar() {
    alert('Parabeńs! Você finalizou sua compra')
    this.carrinhoService.limparCarrinho()
    this.router.navigate(['produtos'])
  }

}
