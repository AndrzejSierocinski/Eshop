import { Product } from '../app/shared/interfaces/product';

export const products: Product[] = [
    {
        id: 1,
        name: 'Grey Goose Vodka',
        price: 35.59,
        compareAtPrice: null,
        images: ['assets/images/products/product-1.jpg', 'assets/images/products/product-1-1.jpg'],
        rating: 3,
        reviews: 12,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: ' GREY GOOSE'},
            {name: 'Country', value: 'FRANCE'},
            {name: 'Alcoholic strength', value: '40% vol.'}
        ],
        options: []
    },
    {
        id: 2,
        name: 'Absolut Mango Vodka',
        price: 23.59,
        compareAtPrice: null,
        images: ['assets/images/products/product-2.jpg', 'assets/images/products/product-2-1.jpg'],
        rating: 4,
        reviews: 11,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'ABSOLUT'},
            {name: 'Country', value: 'SWEDEN'},
            {name: 'Alcoholic strength', value: '40% vol.'}
        ],
        options: []
    },
    {
        id: 3,
        name: 'Beluga Noble Russian Vodka',
        price: 33.55,
        compareAtPrice: null,
        images: ['assets/images/products/product-3.jpg', 'assets/images/products/product-3-1.jpg'],
        rating: 5,
        reviews: 9,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'BELUGA'},
            {name: 'Country', value: 'RUSSIAN FEDERATION'},
            {name: 'Alcoholic strength', value: '40% vol.'}
        ],
        options: []
    },
    {
        id: 4,
        name: 'Boris Jelzin Vodka',
        price: 10.49,
        compareAtPrice: 1189,
        images: ['assets/images/products/product-4.jpg', 'assets/images/products/product-4-1.jpg'],
        rating: 4,
        reviews: 9,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'BORIS JELZIN'},
            {name: 'Country', value: 'FRANCE'},
            {name: 'Alcoholic strength', value: '37,5% vol.'}
        ],
        options: []
    },
    {
        id: 5,
        name: 'Crystal Head Vodka',
        price: 14.58,
        compareAtPrice: null,
        images: ['assets/images/products/product-5.jpg', 'assets/images/products/product-5-1.jpg'],
        rating: 5,
        reviews: 5,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'CRYSTAL HEAD'},
            {name: 'Country', value: 'CANADA'},
            {name: 'Alcoholic strength', value: '40% vol.'}
        ],
        options: []
    },
    {
        id: 6,
        name: 'Boris Jelzin Vodka Strawberry',
        price: 23.98,
        compareAtPrice: null,
        images: ['assets/images/products/product-6.jpg', 'assets/images/products/product-6-1.jpg'],
        rating: 4,
        reviews: 17,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'BORIS JELZIN'},
            {name: 'Country', value: 'FRANCE'},
            {name: 'Alcoholic strength', value: '37,5% vol.'}
        ],
        options: []
    },
    {
        id: 7,
        name: 'Finlandia 101 proof Finnish Vodka',
        price: 17.99,
        compareAtPrice: null,
        images: ['assets/images/products/product-7.jpg', 'assets/images/products/product-7-1.jpg'],
        rating: 3,
        reviews: 5,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'FINLANDIA'},
            {name: 'Country', value: 'FINLAND'},
            {name: 'Alcoholic strength', value: '50,5% vol.'}
        ],
        options: []
    },
    {
        id: 8,
        name: 'Dynasty Vodka',
        price: 16.49,
        compareAtPrice: null,
        images: ['assets/images/products/product-8.jpg', 'assets/images/products/product-8-1.jpg'],
        rating: 3,
        reviews: 6,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'SCHLOSSBERG'},
            {name: 'Country', value: 'GERMANY'},
            {name: 'Alcoholic strength', value: '37,5% vol.'}
        ],
        options: []
    },
    {
        id: 9,
        name: 'Russian Standard Imperia Vodka',
        price: 18.99,
        compareAtPrice: null,
        images: ['assets/images/products/product-9.jpg', 'assets/images/products/product-9-1.jpg'],
        rating: 5,
        reviews: 25,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'RUSSIAN STANDARD'},
            {name: 'Country', value: 'RUSSIAN FEDERATION'},
            {name: 'Alcoholic strength', value: '40% vol.'}
        ],
        options: []
    },
    {
        id: 10,
        name: 'Skyy Vodka',
        price: 14.11,
        compareAtPrice: null,
        images: ['assets/images/products/product-10.jpg', 'assets/images/products/product-10-1.jpg'],
        rating: 4,
        reviews: 12,
        availability: 'In Stock',
        features: [
            {name: 'Brand', value: 'SKYY'},
            {name: 'Country', value: 'USA'},
            {name: 'Alcoholic strength', value: '40% vol.'}
        ],
        options: []
    }
];
