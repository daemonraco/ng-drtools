import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'drstringify'
})
export class StringifyPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return JSON.stringify(value, null, 4);
    }
}