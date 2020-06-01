import { Category } from '../app/shared/interfaces/category';

export const categories: Category[] = [
    {name: 'Recent Story', url: '../'},
    {name: 'Special Offers', url: '../', children: [
        {name: 'Spring Sales', url: '../'},
        {name: 'Summer Sales', url: '../'},
        {name: 'Autumn Sales', url: '../'},
        {name: 'Christmas Sales', url: '../'},
        {name: 'Other Sales', url: '../'}
    ]},
    {name: 'New Arrivals', url: '../'},
    {name: 'Reviews', url: '../'},
    {name: 'Drills and Mixers', url: '../'},
    {name: 'Types of Alcohol', url: '../'},
    {name: 'Types of Alcohol', url: '../'},
    {name: 'Wrenches', url: '../'}
];
