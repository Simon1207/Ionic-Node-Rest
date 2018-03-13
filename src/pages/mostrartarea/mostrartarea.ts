import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ObtenerTareaProvider} from '../../providers/obtener-tarea/obtener-tarea';

@IonicPage()
@Component({
  selector: 'page-mostrartarea',
  templateUrl: 'mostrartarea.html',
})
export class MostrartareaPage {

  users:string[];

  //componentes necesarios para realizar busqueda filtrada
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public _ts:ObtenerTareaProvider) {
    this.getUsersWeb();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrartareaPage');

  }

  getUsersWeb(){
    this._ts.getUsers()
      .subscribe(
        (data)=>{
          this.users=data['results'];
          console.log(this.users=data['results']);
          //var result=JSON.stringify(this.users);
          console.log(this.users);


          for(var i=0;i<this.users.length;i++){
            console.log("Recorriendo con for");
            console.log(this.users[i]['name']['first']);
            console.log("Agregando a arreglo items");
            console.log(this.items=this.users[i]['name']['first']);
            console.log("Arreglo items: ");
            console.log(this.items+=this.users[i]['name']['first']);

          }
          console.log("ITEMS");
          console.log(this.items);

        },
        (error)=>{
          console.log(error);
        }
      )
  }

/*
initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }
*/

  getItems(ev: any){
    //asigno el valor a searchbar
    let val=ev.target.value;

    //si el valor es un string vacio no filtra items
    if (val && val.trim() != '') {
      this.users = this.users.filter((user) => {
        return (user.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
