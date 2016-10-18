import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "orderBy"
})

export class orderByPipe implements PipeTransform {
    transform(value, param) {

      if(param == undefined){
        return value
      }
      else if(param == "firstname" ) {
          return value.sort(function(a,b){
            if(a.firstname < b.firstname) return -1;
            if(a.firstname > b.firstname) return 1;
            return 0;
          });
        }
        else if (param == "timestamp"){
        return value.sort(function(a,b){
          if(a.timestamp < b.timestamp) return -1;
          if(a.timestamp > b.timestamp) return 1;
          return 0;
})
          }
    }
}
