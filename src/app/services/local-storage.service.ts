import { Injectable } from '@angular/core'
import { Current } from '../models/current.model'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getFavorites() {
    let localStorageItem = JSON.parse(localStorage.getItem('favorites'))
    return !localStorageItem ? [] : localStorageItem
  }

  saveFavorite(favorite: Current) {
    return localStorage.setItem('favorites', JSON.stringify(favorite))
  }

  saveFavorites(favorites: Array<Current>) {
    return localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  deleteFavorite() {
    localStorage.setItem('favorites', null)
  }
  
}
