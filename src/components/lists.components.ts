import { Component, Input }  from "@angular/core";
import { WhishesService } from "../providers/whishes.service";
import { List } from "../models/index";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { NewListPage } from "../pages/newList/newList.component";


@Component({
  selector: 'app-lists',
  templateUrl: 'lists.component.html'
})

export class ListsComponent {

  @Input() completed: boolean = false;

  constructor( public whishesServ: WhishesService,
      private navCtrl: NavController,
      private alertCtrl: AlertController) {

  }


  itemSelected(itemList: List) {
    this.navCtrl.push(NewListPage, {
      title: itemList.title,
      list: itemList
    });
  }

  removeList(list: List) {
    this.whishesServ.removeList(list);
  }

  editListName( list: List, slidingItem: ItemSliding) {

    slidingItem.close();

    const alert = this.alertCtrl.create({
      title: 'Edit list',
      message: 'Edit name\'s list',
      inputs: [{
        name: 'title',
        placeholder: 'Name of the list',
        value: list.title
      }],
      buttons: [{
        text: 'Cancel',
      }, {
        text: 'Save',
        handler: data => {
          if (data.title.length < 0) {
            return;
          }

          list.title = data.title;
          this.whishesServ.saveStorage();
        }
      }]
    });

    alert.present();
  }

}
