//import
// {Component, EventEmitter, Output }
//from
 // '@angular/core';
  import
 {Component }
from
  '@angular/core';
import { NgForm } from '@angular/forms';

 // import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css']
})

export class LivrosInserirComponent {

 // @Output() livroAdicionado = new EventEmitter<Livro>();

  constructor (public livroService: LivroService){

  }



 // id: string;
 // titulo: string;
 // autor: string;
//paginas: string;




  onAdicionarLivro(form: NgForm) {
    if (form.invalid) return;
    this.livroService.adicionarLivro(
      form.value.id,
      form.value.titulo,
      form.value.autor,
      form.value.paginas
    );
    form.resetForm();
   // const livro: Livro = {
    //  id: form.value.id ,
      //titulo: form.value.titulo ,
      //autor: form.value.autor ,
      //paginas: form.value.paginas ,
    //};

   // this.livroAdicionado.emit(livro);

   // this.id= '';
   // this.titulo= '';
   // this.autor= '';
    //this.paginas= '';
  }

}
