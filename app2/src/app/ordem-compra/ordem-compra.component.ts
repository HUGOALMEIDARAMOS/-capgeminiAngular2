import { Component, OnInit } from '@angular/core';
import { ordemCompraService } from '../ordem-compra-service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers:[ordemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  //Pedido
  public pedido: Pedido = new Pedido('','','','')

  public endereco:string = ''
  public numero :string = ''
  public complemento:string=''
  public formaPagamento:string=''

  //CONTROLES DE VALIDACAO DOS CAMPOS
  public enderecoValido!: boolean
  public numeroValido!: boolean
  public complementoValido!: boolean
  public pagamentoValido!: boolean

  //ATRIBUTOS PARA ESTADOS PRIMITIVOS DOS CAMPOS (PRISTINE)
  public enderecoEstadoPrimitivo :boolean = true
  public numeroEstadoPrimitivo :boolean = true
  public complementoEstadoPrimitivo :boolean = true
  public pagamentoEstadoPrimitivo :boolean = true

  //CONTROLAR BOTAO CONFIRMA CONTA
  public formEstado:string = 'disabled'

  constructor(private ordemCompraService: ordemCompraService) { }

  ngOnInit(): void {

  }

  public atualizaEndereco(endereco:string): void{

    this.endereco = endereco

    this.enderecoEstadoPrimitivo = false

   if(this.endereco.length > 3){
    this.enderecoValido=true
   } else{
    this.enderecoValido=false
   }
   this.habilitaFormButon()

  }

  public atualizaNumero(numero:string): void{

    this.numero = numero

    this.numeroEstadoPrimitivo=false
    
     if ( this.numero.length > 0){
        this.numeroValido=true
    }else{
       this.numeroValido=false
     }
    this.habilitaFormButon()
  }

  public atualizaComplemento(complemento:string): void{

    this.complemento = complemento

    this.complementoEstadoPrimitivo= false
   
    if (this.complemento.length > 0){
      this.complementoValido=true
    }
    this.habilitaFormButon()
  }

  public atualizaFormaPagamento(formaPagamento:string): void{

    this.formaPagamento = formaPagamento

    this.pagamentoEstadoPrimitivo = false

    if (this.formaPagamento.length > 0){
      this.pagamentoValido=true
    }else{
      this.pagamentoValido=false
    }

    this.habilitaFormButon()
  }

  public habilitaFormButon():void{
   
    if( this.enderecoValido === true &&  this.numeroValido === true &&  this.pagamentoValido===true){
      this.formEstado= ''
    }else{
      this.formEstado= 'disabled'
    }

  }

  public confirmarCompra():void{
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento
    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe()
  }
  

}
