import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { retry } from "rxjs/operators"
import { Oferta } from "./shared/oferta.model"


@Injectable()
export class OfertasService{

    baseUrl = `http://localhost:3000`

    constructor(private http: HttpClient){}   

    public getOferta(): Promise<Oferta[]>{
       //efetuar uma requisicao http
       //retornar uma promisse Oferta[]
      return this.http.get(this.baseUrl)
        .toPromise()
            .then((resposta: any) => resposta)
    }


    public getOfertasPorCategorias(categoria:string): Promise<Oferta[]>{

        const url = `${this.baseUrl}/ofertas?categoria=${categoria}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertasPorDiversao(diversao:string): Promise<Oferta[]>{

        const url = `${this.baseUrl}/ofertas?categoria=${diversao}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
        const url = `${this.baseUrl}/ofertas?id=${id}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0]
        })
    }

    public getComoUsarOfertaPorId(id:number): Promise<string>{

        const url = `${this.baseUrl}/como-usar?id=${id}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => {
           return resposta[0].descricao
        }) 
    }

    public getOndeFicaOfertaPorId(id:number): Promise<string>{

        const url = `${this.baseUrl}/onde-fica?id=${id}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => {
           return resposta[0].descricao
        }) 
    }


    


 



   /* public getOferta2():Promise<Array<Oferta>>{
        return new Promise((resolve, reject) =>{
            //algum tipo de processamento ao finalizar chama a funcao resolve ou a funcao reject
            //console.log('sera que passou por aqui')

            //CONTEXTO SINCRONO SOMENTE PARA DEMOSTRACAO
            let deu_certo = true
            if(deu_certo){
                setTimeout( () => resolve(this.ofertas), 3000)               
            }else{
                reject({codigo_erro: 404, messagem_erro: 'Servidor não encontrado XYZ'})
            }
           
        })
        .then((ofertas: any) => {
            //fazer alguma trataiva 
            console.log('primeiro then')
            return ofertas
        })
        .then((ofertas: any) => {
            //fazer alguma trataiva 
            console.log('segundo then')
            return new Promise((resolve2, reject2) =>{
                setTimeout( () => {resolve2(ofertas)}, 3000) 
            })
        })
        .then((ofertas: any) => {
            //fazer alguma trataiva 
            console.log('terceiro then')
            return ofertas
        })

    }*/

}