import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { LocalStorageService } from '../../services/local-storage.service'
import { Current } from '../../models/current.model'
import { Saved } from '../../models/saved.model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private weatherService: WeatherService, private localStorageService: LocalStorageService) { }

  ngOnInit() { 
    this.localStorageService.change.subscribe(favsUpdated => {
      this.favorites = this.localStorageService.getFavorites()
    });
  }

  searchText = ''
  current = new Current()
  favorites = this.localStorageService.getFavorites()

  onKey(event: any) {
    this.searchText = event.target.value
  }

  search() {
    this.weatherService.getCurrentSearch(this.searchText)
      .subscribe( data => {
        this.current = data
      })
  }

  clear() {
    this.searchText = ''
    this.current = new Current()
  }

  save() {
    let fav = new Saved()
    // do this via constructor?
    fav.id = this.current.id
    fav.name = this.current.name
    this.favorites.push(fav)
    // just brute forcing this for now
    this.localStorageService.deleteFavorite()
    this.localStorageService.saveFavorites(this.favorites)
  }

}
