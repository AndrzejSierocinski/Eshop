export interface ProductFilterBase {
    name: string;
}

export interface ProductFilterCategory extends ProductFilterBase {
    type: 'categories';
    options: {
        items: {
            type: 'parent' | 'current' | 'child';
            count: number;
            name: string;
        }[];
    };
}

export interface ProductFilterPrice extends ProductFilterBase {
    type: 'price';
    options: {
        min: number;
        max: number;
        from: number;
        to: number;
    };
}

export interface ProductFilterCheckbox extends ProductFilterBase {
    type: 'checkbox';
    options: {
        items: {
            label: string;
            count: number;
            checked: boolean;
            disabled: boolean;
        }[];
    };
}

export type ProductFilter = ProductFilterCategory | ProductFilterCheckbox | ProductFilterPrice;
