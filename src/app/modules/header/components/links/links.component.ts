import {Component} from '@angular/core';
import {navigation} from '../../../../../data/header-navigation';
import {NavigationLink} from '../../../../shared/interfaces/navigation-link';

@Component({
    selector: 'app-header-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    items: NavigationLink[] = navigation;

    constructor() {
    }
}
