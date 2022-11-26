import {ShoppingBag} from "phosphor-react";
import Menu from "./Menu";
import InputSearch from "../common/InputSearch";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar x-container">
                <div className="navbar-content">
                    <div className="left-content">
                        <div className="logo">
                            <ShoppingBag size={42} weight="bold"/>
                        </div>
                        <InputSearch/>
                    </div>
                    <Menu/>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;