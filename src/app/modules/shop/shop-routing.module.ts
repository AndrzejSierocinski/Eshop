import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PageCartComponent } from './pages/page-cart/page-cart.component';
import { PageWishlistComponent } from './pages/page-wishlist/page-wishlist.component';
import { PageCheckoutComponent } from './pages/page-checkout/page-checkout.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { PageProductComponent } from './pages/page-product/page-product.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-list'
    },
    {
        path: 'category-list',
        component: PageCategoryComponent,
        data: {
            columns: 3,
            viewMode: 'list',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'product',
        pathMatch: 'full',
        redirectTo: 'product/1'
    },
    {
        path: 'product/:id',
        component: PageProductComponent,
        data: {
            layout: 'standard'
        }
    },
    {
        path: 'product-columnar',
        component: PageProductComponent,
        data: {
            layout: 'columnar'
        }
    },
    {
        path: 'product-sidebar',
        component: PageProductComponent,
        data: {
            layout: 'sidebar',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'cart',
        component: PageCartComponent
    },
    {
        path: 'checkout',
        component: PageCheckoutComponent,
        canActivate: [CheckoutGuard],
    },
    {
        path: 'wishlist',
        component: PageWishlistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }
