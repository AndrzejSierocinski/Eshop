import {NavigationLink} from '../app/shared/interfaces/navigation-link';

export const navigation: NavigationLink[] = [
    {label: 'About Us', url: './site/about-us'},
    {label: 'Home', url: './'},
    {
        label: 'Shop', url: './shop', menu: {
            type: 'menu',
            items: [
                {label: 'Shop List', url: './shop/category-list'},
                {label: 'Cart', url: './shop/cart'},
                {label: 'Checkout', url: './shop/checkout'},
                {label: 'Wishlist', url: './shop/wishlist'}
            ]
        }
    },
    {label: 'Blog', url: './blog/post-classic'},
    {label: 'FAQ', url: './site/faq'},
    {label: 'Contact Us', url: './site/contact-us-alt'}
];
