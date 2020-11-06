import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro} from '../livro.model'
import { LivroService } from '../livro.service';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit, OnDestroy {

  livros: Livro[] = [];
  private livrosSubscription: Subscription;

  constructor(public livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.getLivros();
    this.livrosSubscription = this.livroService
    .getListaLivrosAtualizadaObservable()
    .subscribe((livros: Livro[]) => {
      this.livros = livros;
    });
  }

  ngOnDestroy(): void {
      this.livrosSubscription.unsubscribe();
  }

}

