import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreartareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creartarea',
  templateUrl: 'creartarea.html',
})
export class CreartareaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreartareaPage');
  }

  //Definicion de arreglo vacio que recibira los datos del form
  todo={}

  //Impresion de datos
  logForm(){
    console.log(this.todo);
  }

}
