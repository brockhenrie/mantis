
export interface CarouselProduct {
  name: string;
  description: string;
  richDescription: string;
  image?: string;
  price: number;
  category: string;
  countInStock: number;
  isFeatured?: boolean;
  id?: string;
  dateCreated: Date;

}
