import {NavLink} from 'react-router-dom';
import {MouseEvent} from "react";

interface Card {
    id: number,
    title: string,
    brand: string,
    thumbnail: string,
    images: string[],
    onShow: (id:number,images:string[]) => void;


}

const Card = ({id, title, brand, thumbnail, images,onShow}: Card) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    <div className="card-main-image">
                        <img src={thumbnail} alt=""/>
                    </div>
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{brand}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={()=>onShow(id,images)} className="navigate-btn" >watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card