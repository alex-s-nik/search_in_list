import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _itemsCount: number = faker.number.int({ min: 10, max: 30 });
  private _data: string[] = [];

  constructor() { 
    this.setInitialData();
  }

  setInitialData(): void {
    for (let index = 0; index < this._itemsCount; index++) {
      const item: string = faker.lorem.word({ length: { min: 10, max: 30 }});
      this._data.push(item);
    };
  }

  getData(): string[] {
    return this._data;
  }
}
