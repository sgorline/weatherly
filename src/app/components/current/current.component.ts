import { Component, OnInit, Input } from '@angular/core'
import {WeatherService} from '../../services/weather.service'

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  fiveDay = {list: []}

  @Input() data: {id: 0}


  ngOnInit() {



  }

  getFiveDay() {
    this.weatherService.getFiveDay(this.data.id)
      .subscribe( data => {
        
      })
  }

}
