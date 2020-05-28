import { Menu } from './model';
import { Guid } from "guid-typescript";

export const MENU: Menu[]= [
    {
        id: Guid.create(),
        name: "Dashboard",
        sortOrder: 0,
        link: "/dashboard",
        icon: null,
        subMenu: [{
            id: Guid.create(),
            name: "Requests",
            sortOrder: 0,
            link: "/dashboard/requests-dashboard",
            icon: null,
            separator: true,
            parentName: "Dashboard"
        },{
            id: Guid.create(),
            name: "WriteOff",
            sortOrder: 10,
            link: "/dashboard/woe-dashboard",
            icon: null,
            separator: false,
            parentName: "Dashboard"
        }],
        separator: false,
        featureName: "Dashboard"
    },
    {
        id: Guid.create(),
        name: "Master Data",
        sortOrder: 10,
        link: "/master-data",
        icon: null,
        featureName: "MasterData",
        subMenu: [{
            id: Guid.create(),
            name: "Item Master",
            sortOrder: 0,
            link: "/master-data/item-master",
            icon: null,
            separator: true,
            parentName: "MasterData"
        }],
    },
    {
        id: Guid.create(),
        name: "Equipment Management",
        sortOrder: 20,
        link: "/equipment-management",
        icon: null,
        subMenu: []
    },
    {
        id: Guid.create(),
        name: "Admin",
        sortOrder: 30,
        link: "/admin",
        icon: null,
        subMenu: []
    },
]

import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LayoutService {
    constructor() { }

    getMenu() {
        return MENU;
    }
    
}