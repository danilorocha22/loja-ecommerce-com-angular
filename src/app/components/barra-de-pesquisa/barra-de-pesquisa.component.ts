import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css']
})
export class BarraDePesquisaComponent implements OnInit {
  descricao: string = ""


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  pesquisar() {
    if(this.descricao) {
      this.router.navigate(['produtos'], { queryParams: { descricao: this.descricao }})
      this.limpar()
      return
    }

    this.limpar()
    this.router.navigate(['produtos'])

  }

  limpar() {
    this.descricao = ""
  }

}


