import { Component, OnDestroy, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_a } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
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

    this.route.params.subscribe((parametros: Params) =>{
      this.ofertaService.getOfertaPorId( parametros.id)
      .then(( oferta: Oferta ) => {
        this.oferta = oferta
        //console.log(this.oferta)
      })
    })

  }

   ngOnDestroy(){
     //this.tempoObservableSubscription.unsubscribe()
     //this.meuObervableTesteSubscript.unsubscribe()
   }


  

}
