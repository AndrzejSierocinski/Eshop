import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-block-testimonial',
    templateUrl: './block-testimonial.component.html',
    styleUrls: ['./block-testimonial.component.sass']
})
export class BlockTestimonialComponent implements OnInit {

    constructor() {
    }

    testimonialcarousel = [
        {
            img: 'assets/images/testimonial/avatar1-165x165.jpg',
            name: 'Bret Harte',
            designation: 'Technical Assistance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Vivamus sit amet purus sed lectus ornare tincidunt eu convallis quam.'
        },
        {
            img: 'assets/images/testimonial/avatar2-165x165.jpg',
            name: 'Edna St. Vincent Millay',
            designation: 'Accountant',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Vivamus sit amet purus sed lectus ornare tincidunt eu convallis quam.'
        },
        {
            img: 'assets/images/testimonial/avatar3-165x165.jpg',
            name: 'Bram Stoker',
            designation: 'Engineer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Vivamus sit amet purus sed lectus ornare tincidunt eu convallis quam.'
        },
        {
            img: 'assets/images/testimonial/avatar4-165x165.jpg',
            name: 'Victor Hugo',
            designation: 'Athlete',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Vivamus sit amet purus sed lectus ornare tincidunt eu convallis quam.'
        }
    ];

    teamcarouselOptions = {
        items: 5,
        margin: 30,
        autoHeight: true,
        nav: false,
        dots: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items: 3,
                margin: 10
            }
        }
    };

    ngOnInit() {
    }

}
