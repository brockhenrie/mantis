
export interface Product {
    name: string;
    description: string;
    richDescription: string;
    image?: string;
    images?: string[];
    price: number;
    category: string;
    countInStock: number;
    isFeatured?: boolean;
    id?: string;
    dateCreated: Date;
}

export interface ProductsResolved{
  products: Product[];
  error?:any;
}
