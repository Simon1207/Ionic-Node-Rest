import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ObtenerTareaProvider} from '../../providers/obtener-tarea/obtener-tarea';

@IonicPage()
@Component({
  selector: 'page-mostrartarea',
  templateUrl: 'mostrartarea.html',
})
export class MostrartareaPage {
  users:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public _ts:ObtenerTareaProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrartareaPage');
    //this._ts.mostrar_tareas();

    this._ts.getUsers()
      .subscribe(
        (data)=>{
          this.users=data['results'];
          console.log(this.users=data['results']);
        },
        (error)=>{
          console.log(error);
        }
      )
  }

}
