import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'designation'
})
export class DesignationPipe implements PipeTransform {

  transform(value:number): string 
  {
    if(value==0)
    {
      return "Full Stack Developer";
    }
    else if(value==1)
    {
      return "UI Developer";
    }
    else if(value==2)
    {
      return "Middleware and Backend"; 
    }
    else
    {
      return "Software Tester";
    }
    
  }

}
