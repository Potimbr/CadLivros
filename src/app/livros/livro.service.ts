import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }

  private livros: Livro [] = [];

  private listaLivrosAtualizada = new Subject<Livro[]>();


  getLivros(): Livro[] {
    return [...this.livros];
  }

  adicionarLivro (id: string, titulo:string, autor:string, paginas:string): void{
    const livro: Livro = {
      id: id,
      titulo: titulo,
      autor: autor,
      paginas: paginas
    };
    this.livros.push(livro);

    // enviando a msg de que aconteceu a modificação no obejto a ser observado: alista de livros
    this.listaLivrosAtualizada.next([...this.livros]);
  }

  //devolve um obejto "observable"
  //para que os componentes se registrem como observadores.
  getListaDeLivrosAtualizadaObservable() {
    return this.listaLivrosAtualizada.asObservable();
  }

}
