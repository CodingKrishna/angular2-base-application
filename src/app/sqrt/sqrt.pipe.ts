import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'sqrt'
})
export class Sqrt implements PipeTransform{

    transform(val : number){
        return Math.sqrt(val);
    }
}