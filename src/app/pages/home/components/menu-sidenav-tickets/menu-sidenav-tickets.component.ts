import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'menu-sidenav-tickets',
  templateUrl: './menu-sidenav-tickets.component.html',
  styleUrls: ['./menu-sidenav-tickets.component.scss']
})
export class MenuSidenavTicketsComponent {
  @Input() isExpanded: boolean = true;
  @Output() toggleMenu = new EventEmitter();
}
