import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers:[OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondefica: string = ''

  constructor(private route:ActivatedRoute, private ondeficaService: OfertasService ) { }

  ngOnInit(): void {
    
    this.route.parent?.params.subscribe((parametros: Params) =>{
      this.ondeficaService.getOndeFicaOfertaPorId(parametros.id)
      .then((resposta: string) =>{
        this.ondefica = resposta
      })
    })   
  }
}
