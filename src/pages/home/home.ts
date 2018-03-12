import { CreartareaPage } from './../creartarea/creartarea';
import {MostrartareaPage} from './../mostrartarea/mostrartarea';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }

  crearTarea(){
    this.navCtrl.push(CreartareaPage);
  }


  mostrarTareas(){
    this.navCtrl.push(MostrartareaPage);
  }

}
