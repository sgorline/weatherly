import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { SearchComponent } from './search/search.component'
import { SavedComponent } from './saved/saved.component'
import { CurrentComponent } from './current/current.component'
import { FiveDayComponent } from './five-day/five-day.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SavedComponent,
    CurrentComponent,
    FiveDayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
