import { Header } from "../Landing_Page/Header"
import "../Landing_Page/Header.css"
import { Login_Adm } from "./Adm"
import"./Adm.css"


function Adm_Login() {

    return (
      <div>
        <Header/>
        <Login_Adm/>
      </div>
    )
  }
  
  export {Adm_Login}