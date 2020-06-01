import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-block-counter',
    templateUrl: './block-counter.component.html',
    styleUrls: ['./block-counter.component.scss']
})
export class BlockCounterComponent implements OnInit {

    constructor() {
    }


    counter = [
        {
            count: 2334,
            img: 'assets/images/banners/crm.png',
            type: 'Satisfied Customers'
        },
        {
            count: 241,
            img: 'assets/images/banners/architect.png',
            type: 'Projects Completed'
        },
        {
            count: 471323,
            img: 'assets/images/banners/clock.png',
            type: 'Hours Worked'
        },
        {
            count: 235,
            img: 'assets/images/banners/award-icon.png',
            type: 'Awards Winning'
        }];

    ngOnInit() {
    }

}
