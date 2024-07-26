import {Header} from"./Header.jsx"
import "./Header.css"
import "../../App.css"
import { Page_promo } from "./Page_promo.jsx"
import "./Page_promo.css"
import { Sobre_nos } from "./Sobre_nos.jsx"
import "./Sobre_nos.css"
import {Equipe} from "./Equipe.jsx"
import "./Equipe.css"
import { Produtos } from "./Produtos.jsx"
import"./Produtos.css"
import { Footer } from "./Footer.jsx"
import "./Footer.css"


function Landing_Page() {

  return (
    <div>
      <Header/>
      <Page_promo/>
      <Sobre_nos/>
      <Equipe/>
      <Produtos/>
      <Footer/>
    </div>
  )
}

export {Landing_Page}