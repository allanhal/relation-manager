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
  }

  showJsonSql() {
    this.SqlHandlerService.sqlPromise().then((result) => {
      this.jsonObj = result
    })
  }

  showJsonText() {
    this.SqlHandlerService.sqlPromise().then((result) => {
      this.jsonText = this.treatJsonSql(result)
    })
  }

  treatJsonSql(sqlObj): string {
    let toReturn = '';
    let sql = sqlObj.sql

    for (let table of sql.table) {
      let tableName = table.$.name;
      if (tableName) {
        toReturn += JSON.stringify(tableName)
        for (let row of table.row) {
          let rowName = row.$.name;
          if (rowName) toReturn += `\n${JSON.stringify(rowName)}`
        }
      }
    }

    return toReturn;
  }

}
