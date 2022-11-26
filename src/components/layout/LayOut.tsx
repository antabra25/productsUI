import Content from "./Content";
import Footer from "./Footer";
import NavBar from "./NavBar";

const LayOut = () => {
    return (
        <div className="layout-container">
            <div className="layout">
                <NavBar/>
                <Content/>
                <Footer/>
            </div>
        </div>
    )
}

export default LayOut;