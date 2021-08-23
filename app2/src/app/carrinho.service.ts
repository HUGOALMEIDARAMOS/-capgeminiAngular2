import { ItemCarrinho } from "./shared/item-carrinho.model"



class CarrinhoService{

    //public itens: ItemCarrinho[] = []
    public itens: Array<ItemCarrinho> = []

    public exibirItens(): Array<ItemCarrinho>{
        return this.itens
    }

}

export default CarrinhoService

