import { RouterOutlet } from "@angular/router";

export const prepareRoute = function (outlet: RouterOutlet):RouterOutlet{
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
