import { Injectable } from '@angular/core'
import { Saved } from '../models/saved.model'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getFavorites() {
    let localStorageItem = JSON.parse(localStorage.getItem('favorites'))
    return !localStorageItem ? [] : localStorageItem
  }

  saveFavorites(favorites: Array<Saved>) {
    return localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  deleteFavorite() {
    localStorage.setItem('favorites', null)
  }
  
}
