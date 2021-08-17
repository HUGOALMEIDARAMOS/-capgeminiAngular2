import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.ondeficaService.getOndeFicaOfertaPorId(this.route.parent?.snapshot.params['id'])
    .then((resposta: string) =>{
      this.ondefica = resposta
    })
  }

}
