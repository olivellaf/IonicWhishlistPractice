import { ItemList } from "./item-list.model";



export class List{

  id: number;
  title: string;
  created_at: Date;
  finished_at: Date;
  finished: boolean;
  items: ItemList[];

  constructor( title: string ) {
    this.title = title;
    this.finished = false;
    this.created_at = new Date();
    this.items = [];

    this.id = new Date().getTime();
  }

}
