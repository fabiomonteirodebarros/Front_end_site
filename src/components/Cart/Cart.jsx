import { Header } from "../Landing_Page/Header";
import "../Landing_Page/Header.css";
import { Sacola } from "./Cart_check";
import "./Cart_check.css";

function Cart() {
    return (
        <div>
            <Header />
            <Sacola />
        </div>
    );
}

export { Cart };
