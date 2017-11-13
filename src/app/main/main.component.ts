import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SqlHandlerService } from '../shared/sql-handler/sql-handler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  jsonObj: any
  jsonText: string

  constructor(private SqlHandlerService: SqlHandlerService) { }

  ngOnInit() {
    var that = this;
    this.SqlHandlerService.sql(function (err, result) {
      that.jsonObj = result
      that.jsonText = JSON.stringify(result)
    })
    
    // this.SqlHandlerService.sqlPromise().then(result => {
    //   console.log(result)
    //   that.jsonObj = result
    //   that.jsonText = JSON.stringify(result)
    // })
  }

}
