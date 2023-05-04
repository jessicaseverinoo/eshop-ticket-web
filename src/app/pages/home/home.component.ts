import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected isVisibleSlideOverStatus: boolean = false;

  constructor() { }

  protected slideOverStatus($event: boolean) {
    console.log("$event", this.isVisibleSlideOverStatus)
    this.isVisibleSlideOverStatus = $event;
  }
}
