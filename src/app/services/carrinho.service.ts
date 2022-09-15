import { ItemCarrinho } from './../types/produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: ItemCarrinho[] = []

  constructor() { }

  obterCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho') || "")
  }

  adicionarItemNoCarrinho(item: ItemCarrinho) {
    this.itens.push(item)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho() {
    this.itens = []
    localStorage.clear()
  }

}
