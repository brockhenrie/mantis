import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';
import { Product } from '../../../../../products/src/lib/models/product.model';

@Component({
  selector: 'ui-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
