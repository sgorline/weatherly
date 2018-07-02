import { Injectable, Output, EventEmitter } from '@angular/core'
import { Saved } from '../models/saved.model'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  @Output()
  change: EventEmitter<boolean> = new EventEmitter();

  favsUpdated = false;

  getFavorites() {
    let localStorageItem = JSON.parse(localStorage.getItem('favorites'))
    return !localStorageItem ? [] : localStorageItem
  }

  saveFavorites(favorites: Array<Saved>):void {
    localStorage.setItem('favorites', JSON.stringify(favorites))
    this.favsUpdated = true
    this.change.emit(this.favsUpdated)
  }

  deleteFavorite():void {
    localStorage.setItem('favorites', null)
  }
  
}
