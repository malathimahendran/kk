import { Component } from '@angular/core';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { WonderPush } from '@ionic-native/wonderpush';
import { ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private localNotifications:LocalNotifications){}
  regNotificat(ms:number){
    this.localNotifications.schedule({
      title:`my ${ms} notification`,
      text:`my detailed description`,
      trigger:{
        //at : new Date(new Date().getTime()+ms)}
        in:2,
        unit:ELocalNotificationTriggerUnit.SECOND 
      },
      });
  }
 
}
 
 
 
 
 
 
 
  /* constructor(private wonderPush:WonderPush) { }
fun(){
  // Subscribe user
  
    .then(() => console.log("User subscribed to notifications"))
    .catch((error: any) => console.error(error));
  
  
  // Send an event (a purchase in this example)
  //  this.wonderPush.sendEvent('purchase', {
   // float_price: 12.99,
   // string_sku: "X123456"
//});
   
  // Tag users (as customers)
  this.wonderPush.addTag('customer');
  
  // Personalize
  // 1. Store user details.
  // 2. Use those details to create segments.
  // 3. Include those details in your notifications.
  this.wonderPush.putProperties({
    string_name: 'John D.',
    int_age: 24
  });
  
  // GDPR
  // 1. set REQUIRES_USER_CONSENT=true to enable GDPR compliance.
  // 2. WonderPush doesn't start until setUserConsent(true) is called.
  const onClick = (userConsent: boolean) => this.wonderPush.setUserConsent(userConsent);
  
  // Listen to notification clicks
/*   document.addEventListener('wonderpush.notificationOpen', function(event) {
    console.log('Notification opened', event.notification);
    if (event.notificationType === 'data') {
      console.log('Silent notification', event.notification);
    }
  }); */

 