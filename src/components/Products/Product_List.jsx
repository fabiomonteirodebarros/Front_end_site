import { Header } from "../Landing_Page/Header";
import "../Landing_Page/Header.css";
import { Produtos } from "./Products";
import "./Products.css";

function Product_List() {
    return (
        <div>
            <Header />
            <Produtos />
        </div>
    );
}

export { Product_List };
