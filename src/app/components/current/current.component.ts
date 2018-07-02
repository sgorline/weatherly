import { Component, OnInit, Input } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { Current } from '../../models/current.model'

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  @Input('data')
  current = new Current()
  
  fiveDay = {}
  visible = false

  getFiveDay() {
    this.visible = !this.visible
    if (this.visible) {
      this.weatherService.getFiveDay(this.current.id)
      .subscribe( data => {
        this.fiveDay = data
      })
    }
  }

}