import { Header } from "../Landing_Page/Header"
import "../Landing_Page/Header.css"
import { ProdutosQuantidade } from "./Item_Estoque"
import "./Item_Estoque.css"



function Estoque() {

    return (
      <div>
        <Header/>
        <ProdutosQuantidade/>
      </div>
    )
  }

  export {Estoque}