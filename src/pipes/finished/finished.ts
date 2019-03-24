import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models/index';

/**
 * Generated class for the FinishedPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'finishedPipe',
  pure: false
})
export class FinishedPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform( lists: List[], finished: boolean ) {

    return lists.filter( list => {
      return list.finished === finished;
    })

  }
}
