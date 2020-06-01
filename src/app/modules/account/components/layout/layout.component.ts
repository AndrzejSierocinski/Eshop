import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
    links: {label: string; url: string}[] = [
        {label: 'Edit Profile', url: './profile'},
        {label: 'Account Dashboard', url: './dashboard'},
        {label: 'My Orders', url: './orders'},
        {label: 'My Product Reviews', url: './reviews'}
    ];

    constructor() { }
}
