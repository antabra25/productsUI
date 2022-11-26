import Products from "../pages/Products";
import About from "../pages/About";
import Home from "../pages/Home"
import {Routes, Route} from "react-router-dom"

const Content = () => {

    return (
        <div className="content-container">
            <div className="content x-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>

            </div>
        </div>
    )

}

export default Content;