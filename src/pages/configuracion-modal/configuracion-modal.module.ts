import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracionModalPage } from './configuracion-modal';

@NgModule({
  declarations: [
    ConfiguracionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracionModalPage),
  ],
})
export class ConfiguracionModalPageModule {}
