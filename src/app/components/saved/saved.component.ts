import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service'

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() { }

  favorites = this.localStorageService.getFavorites()



}
