import { RouterOutlet } from "@angular/router";

export function prepareRoute(outlet: RouterOutlet):RouterOutlet{
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
