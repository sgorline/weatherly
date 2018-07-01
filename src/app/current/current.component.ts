import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor() { }

  @Input() data: Object;


  ngOnInit() {

    


  }

}
