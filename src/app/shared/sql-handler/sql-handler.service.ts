import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';

@Injectable()
export class SqlHandlerService {

  // private sqlObj;

  constructor() {

  }

  initSqlObject() {
    // xml2js.parseString(localStorage.getItem('xml'), function (err, result) {
    //   this.sqlObj = result.sql
    // });


    // new Promise((resolve, reject) => {
    //   xml2js.parseString(localStorage.getItem('xml'), function (err, result) {
    //     resolve(result)
    //   });
    // }).then((result) => {
    //   this.sqlObj = result
    // })
  }

  sqlPromise() {
    return new Promise((resolve, reject) => {
      xml2js.parseString(localStorage.getItem('xml'), function (err, result) {
        resolve(result)
      });
    });
  }

  // getSqlObj() {
  //   if (!this.sqlObj) this.initSqlObject()
  //   return this.sqlObj
  // }

}
