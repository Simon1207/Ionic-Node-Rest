import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class NuevaTareaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NuevaTareaProvider Provider');
  }


}
