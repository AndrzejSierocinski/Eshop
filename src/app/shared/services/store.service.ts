import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    address = '13 New Street, San Francisco 12312 USA';
    email = 'e-shop@example.com';
    phone = ['(33) 123-1234', '(33) 123-1235'];
    hours = 'Monday-Saturday 08:00am - 7:00pm';
    fax = '22 123 12 12';

    get primaryPhone(): string|null {
        return this.phone.length > 0 ? this.phone[0] : null;
    }

    constructor() { }
}
