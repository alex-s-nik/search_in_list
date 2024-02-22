import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public items: string[] = [];

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
      this.items = this._searchService.getData();
  }

  selectedItemHandler(event: string) {
    console.log('Selected item: %s', event);
  }

  searchPatternHandler(event: string) {
    this.items = this._searchService.filterData(event);
  }
}
