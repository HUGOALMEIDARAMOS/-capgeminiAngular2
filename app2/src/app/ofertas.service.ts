import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { map, retry } from "rxjs/operators"
import { URL_API } from "./app.api"
import { Oferta } from "./shared/oferta.model"


@Injectable()
export class OfertasService{

    baseUrl = `http://localhost:3000`

    constructor(private http: HttpClient){}   

    public getOferta(): Promise<Oferta[]>{
       //efetuar uma requisicao http
       //retornar uma promisse Oferta[]
       const url = `${URL_API}/ofertas?destaque=true`;
      return this.http.get(url)
        .toPromise()
            .then((resposta: any) => resposta)
    }


    public getOfertasPorCategorias(categoria:string): Promise<Oferta[]>{

        const url = `${URL_API}/ofertas?categoria=${categoria}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertasPorDiversao(diversao:string): Promise<Oferta[]>{

        const url = `${URL_API}/ofertas?categoria=${diversao}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
        const url = `${URL_API}/ofertas?id=${id}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0]
        })
    }

    public getComoUsarOfertaPorId(id:number): Promise<string>{

        const url = `${URL_API}/como-usar?id=${id}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => {
           return resposta[0].descricao
        }) 
    }

    public getOndeFicaOfertaPorId(id:number): Promise<string>{

        const url = `${URL_API}/onde-fica?id=${id}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta: any) => {
           return resposta[0].descricao
        }) 
    }

    public pesquisaOferta(termo: string): Observable<Oferta[]>{
        const url = `${URL_API}/ofertas?descricao_oferta_like=${termo}`;
        return this.http.get<Oferta[]>(url)
        .pipe(retry(10))  // aqui é para dizer ao http fazer 10 tentativas caso de erro
        .pipe(map((response) => response))
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