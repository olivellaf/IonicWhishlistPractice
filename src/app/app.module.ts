import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

// Components / Pages
import { ListsComponent } from '../components/lists.components';

import { PendingsPage } from '../pages/pendings/pendings.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { NewListPage } from '../pages/newList/newList.component';



// Services or Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WhishesService } from '../providers/whishes.service';

// Pipes
import { FinishedPipe } from '../pipes/finished/finished';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingsPage,
    FinishedPage,
    NewListPage,
    FinishedPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingsPage,
    FinishedPage,
    NewListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WhishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
