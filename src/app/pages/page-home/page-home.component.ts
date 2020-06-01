import {Component} from '@angular/core';
import {products} from '../../../data/shop-products';
import {categories} from '../../../data/shop-block-categories';
import {posts} from '../../../data/blog-posts';

@Component({
    selector: 'app-page-home-two',
    templateUrl: './page-home.component.html',
    styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent {
    products = products;
    categories = categories;
    posts = posts;

    columns = [
        {
            header: 'Top Rated Products',
            products: products.slice(0, 3)
        },
        {
            header: 'Special Offers',
            products: products.slice(3, 6)
        },
        {
            header: 'Newest Product',
            products: products.slice(6, 9)
        }
    ];

    newArrivals = {
        loading: false,
        products: products.slice(),
        timeout: null
    };

    constructor() {
    }
}
