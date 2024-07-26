import { Route, Routes } from "react-router-dom";
import { Landing_Page } from "./components/Landing_Page/Landing_Page";
import { Adm_Login } from "./components/Login_Adm/Login_Adm";
import { Login_Page } from "./components/Login_Usuario/Login_Usuario";
import { Product_List } from "./components/Products/Product_List";
import { Cart } from "./components/Cart/Cart";
import { Funcionarios } from "./components/Administrativo/Funcionario_Page";
import { Estoque } from "./components/Estoque/Estoque";
import { CartProvider } from "./components/Cart/CartContext";  // Importar CartProvider

function App() {
    return (
        <CartProvider>  {/* Envolver as rotas com CartProvider */}
            <div>
                <Routes>
                    <Route path="/init" Component={Landing_Page} />
                    <Route path="/adm" Component={Adm_Login} />
                    <Route path="/cadastro" Component={Login_Page} />
                    <Route path="/products" Component={Product_List} />
                    <Route path="/cart" Component={Cart} />
                    <Route path="/func" Component={Funcionarios} />
                    <Route path="/est" Component={Estoque} />
                </Routes>
            </div>
        </CartProvider>
    );
}

export default App;
