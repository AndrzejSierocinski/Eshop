import {Component} from '@angular/core';
import {DirectionService} from '../../../../shared/services/direction.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './page-about-us.component.html',
    styleUrls: ['./page-about-us.component.scss']
})
export class PageAboutUsComponent {
    carouselOptions = {
        nav: false,
        dots: true,
        // autoplay: true,
        loop: true,
        responsive: {
            400: {items: 3, margin: 26},
            180: {items: 2, margin: 20},
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };

    constructor(
        private direction: DirectionService
    ) {
    }
}
