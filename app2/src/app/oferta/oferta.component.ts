import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Observable, Observer, Subscription, interval } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta !: Oferta

  //private tempoObservableSubscription !: Subscription
  //private meuObervableTesteSubscript !: Subscription
  

  constructor( private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit(): void {

    //captura os parametros vindo na rota.   
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta
        //console.log(this.oferta)
      })


    //  let tempo = interval(2000)
    //    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) =>{
    //    console.log(intervalo)
    //  })


    // //observable (observavel)
    // let meuObservableTeste =  new Observable((observer: Observer<number>) => {
    //   observer.next(1)
    //   observer.next(3)
    //   observer.complete()
    //   //observer.error('Algum erro encontrado na stream')
    //   observer.next(7)
    // })


    // //observable (observador)
    //  this.meuObervableTesteSubscript = meuObservableTeste.subscribe(
    //   (resultado :number)=> console.log(resultado + 10),  //trata p next
    //   (erro: string) => console.log(erro),  // trata o erro
    //   () => console.log('Stram foi fianlizada') //trata a conclusao
    // )
   

      /*this.route.params.subscribe((parametro: any) =>{
        console.log('subscribe', parametro)
      }, 
      (erro:any)=> console.log(erro), 
      () => console.log('processamento concluido')
      )*/
  
  //outra forma de recuperacao de dados, porem aqui fica vigiando as alteracoes
  /*this.route.params.subscribe((parametro: any) => {
    console.log(parametro.id)
  })*/
  
  }

   ngOnDestroy(){
     //this.tempoObservableSubscription.unsubscribe()
     //this.meuObervableTesteSubscript.unsubscribe()
   }


  

}
