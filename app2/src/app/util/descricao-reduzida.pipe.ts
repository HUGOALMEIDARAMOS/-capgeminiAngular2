import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{

    transform(texto: string, tamanhopTruncar: number, iniciarEm: number): string{
        if(texto.length > tamanhopTruncar){
            return texto.substr(iniciarEm, tamanhopTruncar) + '...'   //passa a posicao inicial e a final onde quer cortar o Texto recebido
        }
        return texto
    }

}