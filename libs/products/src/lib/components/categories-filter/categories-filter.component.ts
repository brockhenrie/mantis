/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '@mantis/core';

@Component({
  selector: 'products-cat-filter',
  templateUrl: './categories-filter.component.html',
})
export class CategoriesFilterComponent implements OnInit {
  @Output()
  filterChange =  new EventEmitter<string>()
  activeFilter!:string;

  @Input()
  categories!:Category[];

  constructor() { }

  ngOnInit(): void {
    this.onAll();
  }

  onFilter(id: string,name:string){
   this.filterChange.emit(id)
    this.activeFilter = name;
  }
  onAll(){
    this.activeFilter = 'all';
    this.filterChange.emit('all')

  }

}
