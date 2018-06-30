import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  searchText = 'test'

  ngOnInit() {


    
  }

  onKey(event: any) {
    console.log(this.searchText)
    this.searchText = event.target.value;
  }

  search() {
    console.log(this.searchText)
  }

  clear() {
    this.searchText = '';
  }

}
