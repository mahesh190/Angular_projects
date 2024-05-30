import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPipe'
})
export class CustPipePipe implements PipeTransform {

  transform(value: any, types: any):any {
    return value.filter(function(res: any){
      return res.name.indexOf(types)>-1
    })

  }

}
