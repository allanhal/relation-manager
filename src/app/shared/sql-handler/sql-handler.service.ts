import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';
import * as promise from 'promise';

@Injectable()
export class SqlHandlerService {

  constructor() { }

  sql(result) {
    xml2js.parseString(localStorage.getItem('xml'), result);
  }

  sqlPromise() {
    return new promise(function (resolve) {
      xml2js.parseString(localStorage.getItem('xml'), function (err, result) {
        resolve(result)
      });
    });
  }

}
