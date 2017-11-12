import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from "d3";
import * as cytoscape from "cytoscape";
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var cy = cytoscape({
      container: document.getElementById('cy'),
      elements: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'c' } },
        {
          data: {
            id: 'ab',
            source: 'a',
            target: 'b'
          }
        },
        {
          data: {
            id: 'ac',
            source: 'a',
            target: 'c'
          }
        }
      ]
    });

  }

}
