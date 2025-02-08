export interface Shop{
    id: number,
    shopCategory: string,
    shopName: string,
    description: string,
    products: Product[]
}
export interface Product{
    id: number,
    title: string,
    price: number
    description: string,
    shopId: number
}