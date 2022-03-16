
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductDataService } from '@mantis/core';



@Component({
  selector: 'products-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {
  pageTitle = 'Angela Henrie - Products';



  constructor(private pd: ProductDataService,
    private title:Title) {};

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);

  }





}
