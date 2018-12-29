import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { NgxWaterfallModule } from 'projects/ngx-waterfall/src/public_api'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxWaterfallModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
