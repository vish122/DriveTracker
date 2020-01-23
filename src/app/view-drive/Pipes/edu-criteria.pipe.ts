import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eduCriteria'
})
export class EduCriteriaPipe implements PipeTransform {

  transform(value:number, education:string): any 
  {
    if(value==0)
    {
      return "B.E. (Computer/IT)"
    }
    else if(value==1)
    {
      return "BCA/MCA"
    }
    else
    {
      return "Other"
    }
  }

}
