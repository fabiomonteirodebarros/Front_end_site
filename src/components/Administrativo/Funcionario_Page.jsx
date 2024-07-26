import { Header } from "../Landing_Page/Header"
import "../Landing_Page/Header.css"
import { Dashboard } from "./funcionario"
import "./Funcionario.css"



function Funcionarios() {

    return (
      <div>
        <Header/>
        <Dashboard/>
      </div>
    )
  }

  export {Funcionarios}