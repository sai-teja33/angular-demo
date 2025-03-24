import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dmeo',
  standalone: true
})
export class DmeoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
