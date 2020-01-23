import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiningProcess'
})
export class JoiningProcessPipe implements PipeTransform {

  transform(value: any, rl:string): any 
  {
    if(value==0)
    {
      return "No training and Direct joining with given CTC";
    }
    else
    {
      return "1-3 months internship and then joining";
    }
    
  }

}
