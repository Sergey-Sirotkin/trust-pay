import { atom } from 'jotai';
import { ProductDetails } from '../types/productDetails.types';

export const productDetailsAtom = atom<ProductDetails>({
    product_title: '',
    product_description: '',
    product_images: [],
    price: 0,
});
