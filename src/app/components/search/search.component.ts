import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { LocalStorageService } from '../../services/local-storage.service'
import { Current } from '../../models/current.model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private weatherService: WeatherService, private localStorageService: LocalStorageService) { }

  ngOnInit() { }

  searchText = 'Egg Harbor'
  current = new Current()

  onKey(event: any) {
    this.searchText = event.target.value
  }

  search() {
    this.weatherService.getCurrent(this.searchText)
      .subscribe( data => {
        this.current = data
      })
  }

  clear() {
    this.searchText = ''
  }

  save() {
    this.localStorageService.saveFavorite(this.current)
  }

}
