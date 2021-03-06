import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../../shared/shared.module';

// components
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import {WidgetsModule} from '../widgets/widgets.module';

@NgModule({
    declarations: [
        ContactsComponent,
        FooterComponent,
        NewsletterComponent
    ],
    imports: [
        // modules (angular)
        CommonModule,
        RouterModule,
        // modules
        SharedModule,
        WidgetsModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule { }
