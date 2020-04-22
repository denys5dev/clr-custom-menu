import { Guid } from 'guid-typescript';

export interface Menu {
    id: Guid;
    name: string;
    sortOrder: number;
    link: string;
    icon?: string;
    subMenu?: Array<SubMenu>;
    separator?: boolean;
    featureName?: string;
}

export interface SubMenu {
    id: Guid;
    name: string;
    sortOrder: number;
    link: string;
    icon?: string;
    separator?: boolean;
    parentName?: string;
}