import { UiToolbar } from "./uiToolbar.model";

export interface UiSidenav{
  sidenavSide: 'start' | 'end',
  toolbarConfig: UiToolbar
}
