import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta !: Oferta
  

  constructor( private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit(): void {

   //captura os parametros vindo na rota.
  
   
   this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta
        //console.log(this.oferta)
      })
  
  //outra forma de recuperacao de dados, porem aqui fica vigiando as alteracoes
  /*this.route.params.subscribe((parametro: any) => {
    console.log(parametro.id)
  })*/
  
  }


  

}
