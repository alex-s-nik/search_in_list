import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent<T> {
  @Input() items: T[] = [];
  @Output() selectItem = new EventEmitter<T>();
  @Output() searchPattern = new EventEmitter<string>();

  removeItemFromItemsList(item: T): void {
    this.selectItem.emit(item);
  }

  filterListByPattern(event: Event): void {
    const filterPattern: string = (event.target as HTMLInputElement).value;
    this.searchPattern.emit(filterPattern);
  }
}
