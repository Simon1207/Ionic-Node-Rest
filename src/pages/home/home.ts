import { CreartareaPage } from './../creartarea/creartarea';
import {MostrartareaPage} from './../mostrartarea/mostrartarea';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConfiguracionModalPage} from './../configuracion-modal/configuracion-modal';

import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {


  }

  crearTarea(){
    this.navCtrl.push(CreartareaPage);
  }


  mostrarTareas(){
    this.navCtrl.push(MostrartareaPage);
  }

  configuracion(){
    let modal=this.modalCtrl.create(ConfiguracionModalPage);
    modal.present();
    //recibo datos enviados por modal
    //configuracion-modal.ts
    modal.onDidDismiss(data => {
     console.log(data);
   });
  }



}
