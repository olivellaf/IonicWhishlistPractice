import { Component }  from "@angular/core";
import { WhishesService } from "../../providers/whishes.service";
import { List, ItemList } from "../../models";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-newList',
  templateUrl: 'newList.component.html'
})

export class NewListPage {

  list: List;
  itemName: string = '';

  constructor(public whishesServ: WhishesService,
              private navParams: NavParams) {

      const title = this.navParams.get('title');

      if (this.navParams.get('list')) {
        this.list = this.navParams.get('list');

      } else {
        this.list = new List(title);
        this.whishesServ.addList(this.list); // afegim la llista a través del servei.
      }

  }

  addNewItem() {

    if(this.itemName.length === 0) {
      return;
    }

    const newItem = new ItemList(this.itemName);

    this.list.items.push(newItem);

    this.whishesServ.saveStorage(); //guardant les coses a la llista

    this.itemName = ''; // para borrar el dato que ha puesto el usuario una vez introducido.
  }

  refreshTask(item: ItemList) {
    item.finished = !item.finished;

    // S'ha d'evaluar si totes les tasques s'han completat.
    const pendings = this.list.items.filter(itemData => {
        return !itemData.finished;
    }).length; // afegint el .length ens retorna el nº de pendents

    if (pendings === 0 ){

      this.list.finished = true;
      this.list.finished_at = new Date();

    } else {
      this.list.finished = false;
      this.list.finished_at = null;
    }

    this.whishesServ.saveStorage(); //guardant les coses a la llista
  }

  removeItem(idx: number) {
    this.list.items.splice(idx, 1);

    this.whishesServ.saveStorage(); //guardant les coses a la llista
  }


}
