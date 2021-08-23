import { ItemCarrinho } from "./shared/item-carrinho.model"
import { Oferta } from "./shared/oferta.model"



class CarrinhoService{

    //public itens: ItemCarrinho[] = []
    public itens: Array<ItemCarrinho> = []

    public exibirItens(): Array<ItemCarrinho>{
        return this.itens
    }

    public incluirItem(oferta:Oferta){
        //Foi adcionado 1 no final porque no template so tem a opção de adionar uma vez, entao ja fica chumbado
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(oferta.id, oferta.imagens[0], oferta.titulo, oferta.descricao_oferta, oferta.valor, 1)

        //verifica se o item em questao já existe dentro de this.item
        let itemCarrinhoEncontrado=  this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)

        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1
        }else{
            this.itens.push(itemCarrinho)
        }     
    }

    public totalCarrinhoCompra(): number {   
        
        let total: number = 0

        this.itens.map((item: ItemCarrinho)=>{
            total = total + (item.valor * item.quantidade)
        })

        return total
    }

    public adcionarQuantidade(itemCarrinho: ItemCarrinho): void{
        console.log(itemCarrinho)

        //incrementar quantidade
        let itemCarrinhoComprado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if(itemCarrinhoComprado){
            itemCarrinhoComprado.quantidade +=1
        }
    }


    public diminuirQuantidade(itemCarrinho: ItemCarrinho): void{
        console.log(itemCarrinho)

        //incrementar quantidade
        let itemCarrinhoComprado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if(itemCarrinhoComprado){
            itemCarrinhoComprado.quantidade -=1
            if(itemCarrinhoComprado.quantidade === 0){
                this.itens.splice(this.itens.indexOf(itemCarrinhoComprado), 1)
            }
        }
    }

    public limparCarrinho(): void {
        this.itens = []
    }

}

export { CarrinhoService }

