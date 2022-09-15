import { ItemCarrinho } from './../types/produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: ItemCarrinho[] = []

  constructor() { }

  obterCarrinho() {
    this.itens = JSON.parse(localStorage.getItem('carrinho') || "")
    return this.itens
  }

  adicionarItemNoCarrinho(item: ItemCarrinho) {
    this.itens.push(item)
    localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }

  limparCarrinho() {
    this.itens = []
    localStorage.clear()
  }

  removerItemDoCarrinho(itemId: number) {
    this.itens = this.itens.filter(item => item.id  !== itemId)
    localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }

}
