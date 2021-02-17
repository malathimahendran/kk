import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { WonderPush } from '@ionic-native/wonderpush';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  LocalNotifications],
  bootstrap: [AppComponent],
})
export class AppModule {}
