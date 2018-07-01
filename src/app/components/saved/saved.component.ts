import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service'
import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private weatherService: WeatherService) { }

  ngOnInit() { 
    this.favorites = this.localStorageService.getFavorites()
    this.favorites.forEach(item => {
      this.search(item.id)
    });
  }

  favorites = []
  currents = []

  search(id: number) {
    this.weatherService.getCurrentById(id)
      .subscribe( data => {
        this.currents.push(data)
      })
  }

  remove(cur) {
    // better way than all oif these?
    let fav =  this.favorites.filter(x => x.id == cur.id)[0];
    this.favorites = this.favorites.filter(obj => obj !== fav)
    this.currents = this.currents.filter(obj => obj !== cur)
    // just brute forcing this for now
    this.localStorageService.deleteFavorite()
    this.localStorageService.saveFavorites(this.favorites)
  }

}
