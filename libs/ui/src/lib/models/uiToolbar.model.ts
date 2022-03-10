import { NavItem } from "./nav-item.model";


export interface UiToolbar {
    isHandset: boolean;
    color: 'primary' | 'accent' | 'warn';
    navConfig: NavItem[];
}
