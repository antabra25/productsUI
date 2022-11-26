import Card from "../common/Card";
import InputSelect from "../common/InputSelect";
import {useState} from "react";
import Modal from "../common/Modal";
import Gallery from "../common/Gallery";
import {ProductsProps} from "../types";
import {ChangeEvent} from "react";

interface ListProductProps {
    products: ProductsProps[]
}

const ListProduct = ({products}: ListProductProps) => {

    const [select, setSelect] = useState<string>('4')
    const [images, setImages] = useState<string[]>([])
    const [show, setShow] = useState<boolean>(false)


    const handleChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }

    const showModal = (id: number, images: string[]) => {
        setShow(true)
        setImages(images)

    }


    const options = ['two', 'three', 'four']
    return (
        <>
            <InputSelect label="Tarjetas por fila " id="row" name="row" value={select} options={options}
                         handleChange={handleChangeOption}/>
            <div className='list-product-container'>

                {show && <Modal show={show} content={<Gallery images={images}/>} closeWindow={() => setShow(false)}/>}

                <div className={`${select}`}>
                    <div className="list-product">
                        {products.map((product, index) =>
                            <Card key={index} id={product.id} title={product.title} brand={product.brand}
                                  thumbnail={product.thumbnail} images={product.images} onShow={showModal}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListProduct