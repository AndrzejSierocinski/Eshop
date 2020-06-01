import {Component, Input} from '@angular/core';
import {DirectionService} from '../../../shared/services/direction.service';

@Component({
    selector: 'app-block-slideshow',
    templateUrl: './block-slideshow.component.html',
    styleUrls: ['./block-slideshow.component.scss']
})
export class BlockSlideshowComponent {
    @Input() withDepartments = false;

    options = {
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        // autoplayTimeout: 1000,
        responsive: {
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };

    slides = [
        {
            title: 'First header<br>Alcohol products',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: 'assets/images/slides/slide-1.jpg',
            image_full: 'assets/images/slides/slide-1-full.jpg',
            image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
        },
        {
            title: 'Second header<br>Christmas decoration',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: 'assets/images/slides/slide-2.jpg',
            image_full: 'assets/images/slides/slide-2-full.jpg',
            image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
        },
        {
            title: 'Third header<br>Another product',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: 'assets/images/slides/slide-3.jpg',
            image_full: 'assets/images/slides/slide-3-full.jpg',
            image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
        },
        {
            title: 'Fourth header<br>One more',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: 'assets/images/slides/slide-4.jpg',
            image_full: 'assets/images/slides/slide-4-full.jpg',
            image_mobile: 'assets/images/slides/slide-4-mobile.jpg'
        }
    ];

    constructor(
        private direction: DirectionService
    ) {
    }
}
