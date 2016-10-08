import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ClickMeComponent }  from './click-me.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 }  from './keyup.components';
import { LittleTourComponent }  from './little-tour.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
