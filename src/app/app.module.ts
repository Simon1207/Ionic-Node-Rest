import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Paginas
import {CreartareaPage} from '../pages/creartarea/creartarea';
import {MostrartareaPage} from '../pages/mostrartarea/mostrartarea'

//Proveedores
import { NuevaTareaProvider } from '../providers/nueva-tarea/nueva-tarea';
import { ObtenerTareaProvider } from '../providers/obtener-tarea/obtener-tarea';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//modals
import {ConfiguracionModalPage} from '../pages/configuracion-modal/configuracion-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreartareaPage,
    MostrartareaPage,
    ConfiguracionModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreartareaPage,
    MostrartareaPage,
    ConfiguracionModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NuevaTareaProvider,
    ObtenerTareaProvider

  ]
})
export class AppModule {}
