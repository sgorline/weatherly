import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor() { }

  current = {
    "coord": {
      "lon": -0.13,
      "lat": 51.51
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 299.75,
      "pressure": 1015,
      "humidity": 47,
      "temp_min": 297.15,
      "temp_max": 301.15
    },
    "visibility": 10000,
    "wind": {
      "speed": 7.7,
      "deg": 90
    },
    "clouds": {
      "all": 0
    },
    "dt": 1530366600,
    "sys": {
      "type": 1,
      "id": 5091,
      "message": 0.0729,
      "country": "GB",
      "sunrise": 1530330435,
      "sunset": 1530390062
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
  }

  ngOnInit() {

    


  }

}
