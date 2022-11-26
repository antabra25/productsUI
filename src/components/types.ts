interface ProductsProps {

    id: number,
    title: string,
    brand: string,
    thumbnail: string,
    images: string[],
    description: string,
    price: number,
    stock: number,
    discountPercentage: number,
    rating: number,
    category: string,

}

export type { ProductsProps }