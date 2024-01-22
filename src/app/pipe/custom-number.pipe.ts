import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNumber',
  standalone: true
})
export class CustomNumberPipe implements PipeTransform {

  transform(value: number, type: string): string {
    return value + " " + type;
  }

}
