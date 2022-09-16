import { Router } from '@angular/router';
import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService,
    public route: Router
  ) { }

  ngOnInit(): void {
  }

  verProdutos() {
    this.route.navigate(['produtos'])
  }

  verCarrinho() {
    this.route.navigate(['carrinho'])
  }

  verContato() {
    this.route.navigate(['contato'])
  }

}
