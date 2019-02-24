import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hi';
  sitelogo = '/assets/images/logo.png';
  subtitle = 'Hi 記載著 <mark>Will</mark> 在網路世界的學習心得與技術分享';
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  // setSiteName() {
  //   this.sitename = 'Haha';
  // }
  setSiteName($event: MouseEvent) {
    if ($event.ctrlKey) {
      debugger;
      console.log($event);
      this.sitename = 'Haha';
    }
  }
  doSearch(val: string) {
    console.log(val);
  }
  setCounter($event: MouseEvent, inc = 1) {
    this.counter += inc;
    $event.preventDefault();
  }

  isHighlight() {
    return this.counter % 2 === 0;
  }
}
