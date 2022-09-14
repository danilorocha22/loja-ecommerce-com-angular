import { IProduto, produtos } from './../types/produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos

  constructor() { }

  getAll() {
    return this.produtos
  }

  getOne(productId: number) {
    return this.produtos.find(p => p.id == productId)
  }

}
