import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
/**
 * Generated class for the ConfiguracionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion-modal',
  templateUrl: 'configuracion-modal.html',
})
export class ConfiguracionModalPage {
  myDate:string;
  sexo:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionModalPage');
  }
  dismiss() {
    let data = { 'nombre': 'simon','fecha':this.myDate,'sexo' : this.sexo };
    this.viewCtrl.dismiss(data);

  }

}
