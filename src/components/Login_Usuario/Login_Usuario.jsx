import { Header } from "../Landing_Page/Header"
import "../Landing_Page/Header.css"
import { Login } from "./Login"
import"./Login.css"


function Login_Page() {

    return (
      <div>
        <Header/>
        <Login/>
      </div>
    )
  }
  
  export {Login_Page}