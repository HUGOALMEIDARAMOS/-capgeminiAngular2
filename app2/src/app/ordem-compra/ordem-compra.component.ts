import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ordemCompraService } from '../ordem-compra-service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers:[ordemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public f !: NgForm

  public idPedidoCompra !: number
 
  constructor(private ordemCompraService: ordemCompraService) { }

  ngOnInit(): void {

  } 

  public confirmarCompra():void {
    let pedido: Pedido = new Pedido(
         this.f.value.endereco,
         this.f.value.numero,
         this.f.value.complemento,
         this.f.value.formaPagamento
         )
    this.ordemCompraService.efetivarCompra(pedido).subscribe((idPedido:number)=>{      
      this.idPedidoCompra = idPedido
      console.log('Pedido cadatrado com sucesso: '+ idPedido )})
  }
}
