import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NuevaTareaProvider} from '../../providers/nueva-tarea/nueva-tarea';

//importo formBuilder
import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-creartarea',
  templateUrl: 'creartarea.html',
})
export class CreartareaPage {
//bandera
flag=true;



//declaro variables que usare para validar formulario
myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public fb:FormBuilder) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      task:['',[Validators.required]]
      /*
      age: ['', [Validators.required]],
      url: ['', [Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
      password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      */
    })
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
    console.log("Formato JSON");
    console.log(JSON.stringify(this.myForm.value));
    console.log("SIN JSON");
    console.log(this.myForm.value);
  }

  showTask(){
    return this.flag=false;

  }






}
