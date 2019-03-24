
import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable()
export class WhishesService {

  lists: List[] = [];

  constructor() {
    this.loadStorage(); // cargamos el contenido local
  }

  addList( list: List) {
    this.lists.push(list);

    this.saveStorage();
  }

  removeList(list: List) {
    this.lists = this.lists.filter( listData => {
      return listData.id !== list.id;
    });

    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if(localStorage.getItem('data') ) {
      this.lists = JSON.parse(localStorage.getItem('data'));

    } else {
      this.lists = [];
    }
  }

}
