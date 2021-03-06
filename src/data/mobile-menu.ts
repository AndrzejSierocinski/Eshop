import {MobileMenuItem} from '../app/shared/interfaces/mobile-menu-item';

export const mobileMenu: MobileMenuItem[] = [
    {
        type: 'link', label: 'Home', url: './', children: [
            {type: 'link', label: 'Home 2', url: '/compact'}
        ]
    },

    {
        type: 'link', label: 'Categories', url: '', children: [
            {
                type: 'link', label: 'Power Tools', url: '', children: [
                    {type: 'link', label: 'Engravers', url: ''},
                    {type: 'link', label: 'Wrenches', url: ''},
                    {type: 'link', label: 'Wall Chaser', url: ''},
                    {type: 'link', label: 'Pneumatic Tools', url: ''}
                ]
            },
            {
                type: 'link', label: 'Machine Tools', url: '', children: [
                    {type: 'link', label: 'Thread Cutting', url: ''},
                    {type: 'link', label: 'Chip Blowers', url: ''},
                    {type: 'link', label: 'Sharpening Machines', url: ''},
                    {type: 'link', label: 'Pipe Cutters', url: ''},
                    {type: 'link', label: 'Slotting machines', url: ''},
                    {type: 'link', label: 'Lathes', url: ''}
                ]
            }
        ]
    },

    {
        type: 'link', label: 'Shop', url: './shop', children: [
            {
                type: 'link', label: 'Shop Grid', url: './shop', children: [
                    {type: 'link', label: '3 Columns Sidebar', url: './shop/category-grid-3-columns-sidebar'},
                    {type: 'link', label: '4 Columns Full', url: './shop/category-grid-4-columns-full'},
                    {type: 'link', label: '5 Columns Full', url: './shop/category-grid-5-columns-full'}
                ]
            },
            {type: 'link', label: 'Shop List', url: './shop/category-list'},
            {type: 'link', label: 'Shop Right Sidebar', url: './shop/category-right-sidebar'},
            {
                type: 'link', label: 'Product', url: './shop/product', children: [
                    {type: 'link', label: 'Product', url: './shop/product'},
                    {type: 'link', label: 'Product Alt', url: './shop/product-columnar'},
                    {type: 'link', label: 'Product Sidebar', url: './shop/product-sidebar'}
                ]
            },
            {type: 'link', label: 'Cart', url: './shop/cart'},
            {type: 'link', label: 'Checkout', url: './shop/checkout'},
            {type: 'link', label: 'Wishlist', url: './shop/wishlist'},
            // {type: 'link', label: 'Compare',     url: './shop/compare'},
            // {type: 'link', label: 'Track Order', url: './shop/track-order'}
        ]
    },

    {
        type: 'link', label: 'Account', url: './account', children: [
            {type: 'link', label: 'Edit Profile', url: './account/profile'},
            {type: 'link', label: 'Login', url: './account/login'},
            {type: 'link', label: 'Account Dashboard', url: './account/dashboard'},
            {type: 'link', label: 'My Orders', url: './account/orders'},
            {type: 'link', label: 'My Product Reviews', url: './account/reviews'},
            {type: 'link', label: 'Change Password', url: './account/password'}
        ]
    },

    {
        type: 'link', label: 'Blog', url: './blog', children: [
            {type: 'link', label: 'Blog Classic', url: './blog/category-classic'},
            {type: 'link', label: 'Blog Grid', url: './blog/category-grid'},
            {type: 'link', label: 'Blog List', url: './blog/category-list'},
            {type: 'link', label: 'Blog Left Sidebar', url: './blog/category-left-sidebar'},
            {type: 'link', label: 'Post Page', url: './blog/post-classic'},
            {type: 'link', label: 'Post Without Sidebar', url: './blog/post-full'}
        ]
    },

    {
        type: 'link', label: 'Pages', url: './site', children: [
            {type: 'link', label: 'About Us', url: './site/about-us'},
            {type: 'link', label: 'Contact Us', url: './site/contact-us'},
            {type: 'link', label: 'Contact Us Alt', url: './site/contact-us-alt'},
            {type: 'link', label: '404', url: './site/not-found'},
            // {type: 'link', label: 'Terms And Conditions', url: './site/terms'},
            {type: 'link', label: 'FAQ', url: './site/faq'}
        ]
    },

    {
        type: 'button', label: 'Currency', children: [
            {type: 'button', label: '€ Euro', data: {currency: 'EUR'}},
            {type: 'button', label: '£ Pound Sterling', data: {currency: 'GBP'}},
            {type: 'button', label: '$ US Dollar', data: {currency: 'USD'}},
            {type: 'button', label: '₽ Russian Ruble', data: {currency: 'RUB'}}
        ]
    },

    {
        type: 'button', label: 'Language', children: [
            {type: 'button', label: 'English', data: {language: 'EN'}},
            {type: 'button', label: 'French', data: {language: 'FR'}},
            {type: 'button', label: 'German', data: {language: 'DE'}},
            {type: 'button', label: 'Russian', data: {language: 'RU'}},
            {type: 'button', label: 'Italian', data: {language: 'IT'}}
        ]
    }
];
