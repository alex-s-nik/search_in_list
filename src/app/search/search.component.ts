import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  public items: string[] = [];

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
      this.items = this._searchService.getData();
  }
}
