import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[OfertasService]
})
export class ComoUsarComponent implements OnInit {


  public comousar: string = ''

  constructor(private route:ActivatedRoute,  private comousarService:OfertasService) { }

  ngOnInit(): void {
    //È necessário inserir o parent? para dizer que queremos pegar da rota pai, ou seja , da rota oferta
    this.comousarService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
      .then((resposta: string) =>{
        this.comousar = resposta
      })
  }

}
