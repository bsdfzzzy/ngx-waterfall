import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  waterfallNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  ngOnInit() {
    setTimeout(() => {
      this.waterfallNum.push(12)
    }, 3000)
  }
}
