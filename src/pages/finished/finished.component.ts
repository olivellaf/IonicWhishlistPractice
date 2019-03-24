import { Component }  from "@angular/core";
import { WhishesService } from "../../providers/whishes.service";
import { List } from "../../models/list.model";


@Component({
  selector: 'page-finished',
  templateUrl: 'finished.component.html'
})

export class FinishedPage {

  constructor( public whishesServ: WhishesService) {

  }

  itemSelected(itemList: List) {
    console.log(itemList);
  }

}
