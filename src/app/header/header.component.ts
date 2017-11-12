import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  url;

  constructor() { }

  ngOnInit() {
    this.url = `
    location: ${window.location}
    location.hash: ${window.location.hash}
    location.host: ${window.location.host}
    location.hostname: ${window.location.hostname}
    location.href: ${window.location.href}
    `;

    let currentLocation = Object.assign({}, window.location); 
    currentLocation.port = '2000';
    // this.urlForWwwsqldesigner = ``


    console.log(currentLocation)
  }

}
