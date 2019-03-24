import { Component } from '@angular/core';
import { FinishedPage } from '../finished/finished.component';
import { PendingsPage } from '../pendings/pendings.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingsPage;
  tab2Root = FinishedPage;

  constructor() {

  }
}
