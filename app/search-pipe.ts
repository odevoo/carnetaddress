import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {
    transform(value, param) {
        if(param == undefined ) {return value}
        else{
        return value.filter((item) => item.firstname.toLowerCase().includes(param));
          }
    }
}
