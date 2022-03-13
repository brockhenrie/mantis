import { trigger, state, style } from "@angular/animations";
import { spinFlashTransition } from "../sequences/spin-flash.sequence";

export function spinFlash(
  itemName: string,
  amount: number,
  duration: number,
) {
  return trigger(`${itemName}`, [
      state('start', style({
        opacity: 1,
        transitions: `rotate(0)`
      })),
      spinFlashTransition(amount, duration),
  ]);
}
