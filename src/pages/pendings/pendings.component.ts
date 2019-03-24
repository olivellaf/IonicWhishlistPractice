import { Component }  from "@angular/core";
import { WhishesService } from "../../providers/whishes.service";
import { List } from "../../models/list.model";
import { NavController, AlertController } from "ionic-angular";
import { NewListPage } from "../newList/newList.component";

@Component({
  selector: 'page-pendings',
  templateUrl: 'pendings.component.html'
})

export class PendingsPage {

  constructor(public whishesServ: WhishesService,
          private navCtrl: NavController,
          private alertCtrl: AlertController) {

  }

  addNewList() {
    const alert = this.alertCtrl.create({
      title: 'New list',
      message: 'Name of the new list',
      inputs: [{
        name: 'title',
        placeholder: 'Name of the list'
      }],
      buttons: [{
        text: 'Cancel',
      }, {
        text: 'Save',
        handler: data => {
          if (data.title.length < 0) {
            return;
          }

          this.navCtrl.push(NewListPage, {
            title: data.title
          })
          console.log(data);
        }
      }]
    });

    alert.present();
  }

}
