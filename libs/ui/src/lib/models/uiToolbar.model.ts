import { UiToolbarNav } from "./toolbar-nav.model";

export interface UiToolbar {
    isHandset: boolean;
    color: 'primary' | 'accent' | 'warn';
    toolbarNav: UiToolbarNav;
}
