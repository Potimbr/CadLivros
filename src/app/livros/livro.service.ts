import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Livro } from './livro.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private httpClient: HttpClient){ }

  private livros: Livro [] = [];

  private listaLivrosAtualizada
      = new Subject<Livro[]>();

  getLivros(): void {
    this.httpClient.get
      <
        {
          mensagem: string,
          livros: Livro[]
        }
      >
      ('http://localhost:3000/api/livros')
      .subscribe(
        (dados) => {
            this.livros = dados.livros;
            this.listaLivrosAtualizada.next([...this.livros]);
        }
      )
    }

  adicionarLivro (id: string, titulo: string, autor: string, paginas: string): void{
    const livro: Livro = {
      id: id,
      titulo: titulo,
      autor: autor,
      paginas: paginas
    };


    this.httpClient.post
      <{mensagem: string}>
      ('http://localhost:3000/api/livros', livro)
      .subscribe(
        (dados) => {
          console.log(dados.mensagem);
          this.livros.push(livro);
          this.listaLivrosAtualizada.next([...this.livros]);
        }
      );
  }

  /**
   * Devolve um objeto "Observable"
   * para que os componentes se registrem
   * como observadores.
   */
  getListaLivrosAtualizadaObservable() {
    return this.listaLivrosAtualizada.asObservable();
  }


}
