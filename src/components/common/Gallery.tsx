interface GalleryProps {
    images: string[]
}

const Gallery = ({images}: GalleryProps) => {

    return (
        <div className="gallery-container">
            <div className="gallery">
                <div className="gallery-content">
                    {images.map((image, index) =>
                        <img src={image} alt="photo" className="gallery-image" key={index}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Gallery;
