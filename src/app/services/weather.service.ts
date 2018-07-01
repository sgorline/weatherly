import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://api.openweathermap.org/data/2.5/'
  appId: string = '90bb7fa425e38887b9f900e74c565b75'

  getCurrent(city: string) {
    return this.http.get(this.baseUrl + 'weather?q=' + city + '&units=imperial&APPID=' + this.appId)
  }

  getFiveDay(id: number) {
    return this.http.get(this.baseUrl + 'forecast?id=' + id + '&units=imperial&APPID=' + this.appId)
  }

}
