import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';

// modules
import { SharedModule } from '../../shared/shared.module';

// blocks
import { BlockBannerComponent } from './block-banner/block-banner.component';
import { BlockFeaturesComponent } from './block-features/block-features.component';
import { BlockPostsComponent } from './block-posts/block-posts.component';
// import { BlockProductColumnsComponent } from './block-product-columns/block-product-columns.component';
import { BlockProductsCarouselComponent } from './block-products-carousel/block-products-carousel.component';
import { BlockProductsComponent } from './block-products/block-products.component';
import { BlockSlideshowComponent } from './block-slideshow/block-slideshow.component';

// components
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import {BlockCounterComponent} from './block-counter/block-counter.component';
import {CountToModule} from 'angular-count-to';
import { BlockTestimonialComponent } from './block-testimonial/block-testimonial.component';

@NgModule({
    declarations: [
        // blocks
        BlockBannerComponent,
        BlockFeaturesComponent,
        BlockPostsComponent,
        // BlockProductColumnsComponent,
        BlockProductsCarouselComponent,
        BlockProductsComponent,
        BlockSlideshowComponent,
        BlockCounterComponent,
        // components
        BlockHeaderComponent,
        BlockTestimonialComponent
    ],
    imports: [
        // modules (angular)
        CommonModule,
        RouterModule,
        // modules (third-party)
        CarouselModule,
        // modules
        SharedModule,
        CountToModule
    ],
    exports: [
        // blocks
        BlockBannerComponent,
        BlockFeaturesComponent,
        BlockPostsComponent,
        // BlockProductColumnsComponent,
        BlockProductsCarouselComponent,
        BlockProductsComponent,
        BlockSlideshowComponent,
        BlockCounterComponent,
        BlockTestimonialComponent
    ]
})
export class BlocksModule { }
