import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { URL_API } from "./app.api";
import { Pedido } from "./shared/pedido.model"

@Injectable()
export class ordemCompraService{


    constructor(private http: HttpClient){}

    public efetivarCompra(pedido: Pedido):Observable<any>{

     

        let headers :  HttpHeaders = new HttpHeaders()
        headers.append('content-type','application/json')

         return this.http.post(
           `${URL_API}/pedidos`, 
           pedido,
          {headers: headers }
         )
         .pipe(map((resposta: any) => {
           return  console.log(resposta.id)                  
        
        }))
    }
}