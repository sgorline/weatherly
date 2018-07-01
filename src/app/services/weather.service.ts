import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Current } from '../models/current.model'
import { FiveDay } from '../models/five-day.model'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://api.openweathermap.org/data/2.5/'
  appId: string = '90bb7fa425e38887b9f900e74c565b75'

  getCurrentById(id: number) {
    return this.http.get<Current>(this.baseUrl + 'weather?id=' + id + '&units=imperial&APPID=' + this.appId)
  }

  getCurrentSearch(city: string) {
    return this.http.get<Current>(this.baseUrl + 'weather?q=' + city + '&units=imperial&APPID=' + this.appId)
  }

  getFiveDay(id: number) {
    return this.http.get<FiveDay[]>(this.baseUrl + 'forecast?id=' + id + '&units=imperial&APPID=' + this.appId)
  }

}
