import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName'
})
export class FirstNamePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      let name = value.split(' ')[0].toLowerCase();
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return '';
  }
}
