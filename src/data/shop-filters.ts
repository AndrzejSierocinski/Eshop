import { ProductFilter } from '../app/shared/interfaces/product-filter';

export const filters: ProductFilter[] = [
    {
        name: 'Categories',
        type: 'categories',
        options: {
            items: [
                {type: 'current', count: 159, name: 'Drinks'},
                {type: 'child',   count: 33, name: 'Vodka'},
                {type: 'child',   count: 32, name: 'Beer'},
                {type: 'child',   count: 31, name: 'Wine'},
                {type: 'child',   count: 12, name: 'Hard Cider'},
                {type: 'child',   count: 9, name: 'Mead'},
                {type: 'child',   count: 7, name: 'Saké'},
                {type: 'child',   count: 6, name: 'Gin'},
                {type: 'child',   count: 6, name: 'Brandy'},
                {type: 'child',   count: 3, name: 'Whiskey'},
                {type: 'child',   count: 3, name: 'Rum'},
                {type: 'child',   count: 2, name: 'Tequila'},
                {type: 'child',   count: 1, name: 'Absinthe'},
                {type: 'child',   count: 1, name: 'Everclear'}
            ]
        }
    },
    {
        name: 'Price',
        type: 'price',
        options: {
            min: 1,
            max: 1500,
            from: 10,
            to: 1200
        }
    },
    {
        name: 'Brand',
        type: 'checkbox',
        options: {
            items: [
                {label: 'Smirnoff', count: 37, checked: false, disabled: false},
                {label: 'Johnnie Walker', count: 29, checked: true, disabled: false},
                {label: 'Bacardi', count: 23, checked: true, disabled: true},
                {label: 'Absolut', count: 19, checked: false, disabled: true},
                {label: 'Finlandia', count: 17, checked: false, disabled: false},
                {label: 'Jack Daniel\'s', count: 13, checked: false, disabled: false},
                {label: 'Patron', count: 11, checked: true, disabled: true},
                {label: 'Remy Martin', count: 7, checked: false, disabled: false},
                {label: 'SKYY', count: 6, checked: false, disabled: false},
                {label: 'Hennessy', count: 4, checked: true, disabled: false},
                {label: 'Chivas Regal', count: 1, checked: false, disabled: true}
            ]
        }
    },
    // {
    //     name: 'Brand',
    //     type: 'radio',
    //     options: {
    //         name: 'filter_radio',
    //         items: [
    //             {label: 'Wakita', count: 7, checked: false, disabled: false},
    //             {label: 'Zosch', count: 42, checked: false, disabled: false},
    //             {label: 'WeVALT', count: 0, checked: true, disabled: true},
    //             {label: 'Hammer', count: 0, checked: false, disabled: true},
    //             {label: 'Mitasia', count: 1, checked: false, disabled: false},
    //             {label: 'Metaggo', count: 25, checked: false, disabled: false}
    //         ]
    //     }
    // },
    // {
    //     name: 'Color',
    //     type: 'color',
    //     options: {
    //         items: [
    //             {label: 'Color 1',  count: 7, color: '#fff',    checked: false, disabled: false, white: true,  light: false},
    //             {label: 'Color 2',  count: 7, color: '#d9d9d9', checked: false, disabled: false, white: false, light: true},
    //             {label: 'Color 3',  count: 7, color: '#b3b3b3', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 4',  count: 7, color: '#808080', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 5',  count: 7, color: '#666',    checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 6',  count: 7, color: '#4d4d4d', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 7',  count: 7, color: '#262626', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 8',  count: 7, color: '#ff4040', checked: true,  disabled: false, white: false, light: false},
    //             {label: 'Color 9',  count: 7, color: '#ff8126', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 10', count: 7, color: '#ffd440', checked: false, disabled: false, white: false, light: true},
    //             {label: 'Color 11', count: 7, color: '#becc1f', checked: false, disabled: false, white: false, light: true},
    //             {label: 'Color 12', count: 7, color: '#8fcc14', checked: true,  disabled: false, white: false, light: false},
    //             {label: 'Color 13', count: 7, color: '#47cc5e', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 14', count: 7, color: '#47cca0', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 15', count: 7, color: '#47cccc', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 16', count: 7, color: '#40bfff', checked: false, disabled: true,  white: false, light: false},
    //             {label: 'Color 17', count: 7, color: '#3d6dcc', checked: true,  disabled: false, white: false, light: false},
    //             {label: 'Color 18', count: 7, color: '#7766cc', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 19', count: 7, color: '#b852cc', checked: false, disabled: false, white: false, light: false},
    //             {label: 'Color 20', count: 7, color: '#e53981', checked: false, disabled: false, white: false, light: false}
    //         ]
    //     }
    // }
];
