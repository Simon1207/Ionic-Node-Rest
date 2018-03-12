import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ObtenerTareaProvider {
tareas:any[]=[];
  constructor(public http: HttpClient) {
    console.log('Hello ObtenerTareaProvider Provider');
   //this.mostrar_tareas();

  }

  mostrar_tareas(){
/*
    let url="http://localhost:3000/task";
    this.http.get(url).subscribe(res=>{
      console.log(res);
      if(res['error']){
      }else{
        this.tareas.push(...['name']);
      }
    })
*/



  console.log("mostrar_tareas !!");
  }

  getUsers() {
   return this.http.get('https://randomuser.me/api/?results=25');
  //return this.http.get('http://192.168.0.69:3000/task')

  }

}
