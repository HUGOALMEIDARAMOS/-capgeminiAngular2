import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas !: Observable<Oferta[]>
  public subjectPesquisa : Subject<string> = new Subject<string>()  //nosso proxy
  public oferta2 !:Oferta[]

 

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa   //retorno de oferta[]
    .pipe(debounceTime(1000)) // da um tempo de 1 segundo apos a tecla se solta para pode fazer a requisicao
    .pipe(distinctUntilChanged()) //serve para caso uma pesquisa nova seja feita com mesmo nome anterior nao repeate a pesquisa
    .pipe(switchMap((termo:string) => {
      console.log('requisicao http',termo )

      //O trim limpa os espacos da esquerda e direita
      if(termo.trim() === ''){
        //retorna um observable de array de oferta vazio
        return  of<Oferta[]>([])
      } 
      return this.ofertaService.pesquisaOferta(termo)   
    }))
    .pipe(catchError((err: any)=>{
      console.log(err)
      return of<Oferta[]>([])
    }))    

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => {
        this.oferta2 = ofertas
        console.log(this.oferta2)
      }
    )
  }

  public pesquisa(termoDaPesquisa: string): void {
    console.log('keyup caracter',termoDaPesquisa )
    this.subjectPesquisa.next(termoDaPesquisa)

    // this.ofertas = this.ofertaService.pesquisaOferta(termoDaPesquisa)    
    // this.ofertas.subscribe(
    //   (ofertas : Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log('Erro status', erro.status),
    //   () => console.log('Fluco de evento completo')
    // )
  }

}
