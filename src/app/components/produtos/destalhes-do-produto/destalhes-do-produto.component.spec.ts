import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestalhesDoProdutoComponent } from './destalhes-do-produto.component';

describe('DestalhesDoProdutoComponent', () => {
  let component: DestalhesDoProdutoComponent;
  let fixture: ComponentFixture<DestalhesDoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestalhesDoProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestalhesDoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
